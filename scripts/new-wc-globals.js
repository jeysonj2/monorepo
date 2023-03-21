import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from 'fs';

function getFilenameDirname(meta) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = path.dirname(__filename);

  return { __dirname, __filename };
}

const { __dirname } = getFilenameDirname(import.meta);

// Load the .env file
import * as dotenv from 'dotenv';
dotenv.config();

// Trim right dashes from a string
const trimRightDashes = (str) => str.replace(/-+$/, '');

const ON_CANCEL_EXIT_CODE = 89;

const onCancel = () => {
  console.log('\nThanks for using the script!  👋\n');
  process.exit(ON_CANCEL_EXIT_CODE);
};

const DEFAULT_ORGANIZATION = process.env.DEFAULT_ORGANIZATION || '@interzero';

const DEFAULT_TAG_PREFIX = process.env.DEFAULT_TAG_PREFIX || 'iz';

const ATOMIC_TYPES = process.env.ATOMIC_TYPES ? process.env.ATOMIC_TYPES.split(',').map(t => t.trim()) : ['atoms', 'molecules', 'organisms', 'templates', 'pages', 'None'];

const PACKAGES_PATH = process.env.PACKAGES_PATH || '../packages';

const VARS_TO_EXPORT = new Map([
  ['IZWC_ORGANIZATION', DEFAULT_ORGANIZATION],
  ['IZWC_NAME', ''],
  ['IZWC_TAG_PREFIX', DEFAULT_TAG_PREFIX],
  ['IZWC_TAG', ''],
  ['IZWC_PATH', PACKAGES_PATH],
  ['IZWC_ATOMIC_TYPE', ATOMIC_TYPES[0]],
  ['IZWC_ATOMIC_TYPE_PATH', ''],
  ['IZWC_TYPESCRIPT', 'true'],
  ['IZWC_PACKAGE_GROUP', ''],
  ['IZWC_PACKAGE_ATOMIC_PATH', ATOMIC_TYPES[0]],
]);

// Get the existing package groups
const getPackagesGroups = () => {
  // Reading the subdirectories of PACKAGE_PATH
  const packagesContent = readdirSync(path.resolve(__dirname, PACKAGES_PATH));
  // Filter out files and only keep directories
  let packagesGroups = packagesContent.filter(file => statSync(path.resolve(__dirname, `${PACKAGES_PATH}/${file}`)).isDirectory());
  // Filter out the directories that are atomic types
  packagesGroups = packagesGroups.filter(dir => !ATOMIC_TYPES.includes(dir));

  return packagesGroups;
};

const PACKAGES_GROUPS_CONFIG_FILE = '.new-wc-package-group.json';

// Get the existing package groups config
const getPackagesGroupsConfig = () => {
  // Reading file PACKAGES_GROUPS_CONFIG_FILE, if it exists
  /**
   * File example:
   * {
   *   "my-package-group": {
   *     "tagPrefix": "my",
   *     "organization": "@my-organization"
   *   },
   *   "my-other-package-group": {
   *     "tagPrefix": "myo",
   *     "organization": "@my-other-organization"
   *   }
   * }
   */
  const filePath = path.resolve(__dirname, PACKAGES_GROUPS_CONFIG_FILE);
  let packagesGroupsConfig = {};

  if (existsSync(filePath)) {
    const packageGroupFile = readFileSync(filePath, 'utf8');
    packagesGroupsConfig = JSON.parse(packageGroupFile || '{}');
  }

  return packagesGroupsConfig;
};

const PACKAGES_GROUPS = getPackagesGroups();
let PACKAGES_GROUPS_CONFIG = getPackagesGroupsConfig();

// Save the packages groups config
const savePackagesGroupsConfig = (packagesGroupsConfig) => {
  const filePath = path.resolve(__dirname, PACKAGES_GROUPS_CONFIG_FILE);
  const fileContent = JSON.stringify(packagesGroupsConfig, null, 2);

  writeFileSync(filePath, fileContent);

  console.log(`\n✅ Saved the packages groups config in ${filePath}\n`);
};

// Syncronize the packages groups config with the existing packages groups
let syncPackagesGroupsConfig = {};
let hasPackagesGroupsConfigChanged = false;
// Loop through the existing packages groups
PACKAGES_GROUPS.forEach((group) => {
  if (!PACKAGES_GROUPS_CONFIG[group]) {
    hasPackagesGroupsConfigChanged = true;
  }

  // Check if the group is already in the packages groups config, if not add it
  syncPackagesGroupsConfig[group] = PACKAGES_GROUPS_CONFIG[group] || {
    tagPrefix: `${trimRightDashes(DEFAULT_TAG_PREFIX)}-${trimRightDashes(group)}-`,
    organization: `${trimRightDashes(DEFAULT_ORGANIZATION)}-${trimRightDashes(group)}`,
  };
});

// Save the packages groups config if it has changed or if the lengths are different
if (hasPackagesGroupsConfigChanged || Object.keys(syncPackagesGroupsConfig).length !== Object.keys(PACKAGES_GROUPS_CONFIG).length) {
  savePackagesGroupsConfig(syncPackagesGroupsConfig);
  PACKAGES_GROUPS_CONFIG = syncPackagesGroupsConfig;
}

// Get the packages groups choices for prompts
const getPackagesGroupsChoices = () => {
  const packagesGroupsChoices = PACKAGES_GROUPS.map(group => ({ title: group, value: group }));
  // Add the option to create a new package group
  packagesGroupsChoices.push({ title: 'Create a new package group', value: 'new' });
  // Add the option to leave the package group empty
  packagesGroupsChoices.push({ title: 'Leave empty', value: 'empty' });

  return packagesGroupsChoices;
};

const PACKAGES_GROUPS_CHOICES = getPackagesGroupsChoices();

// Check if a tag prefix is already used in the package groups config
const isPackagesGroupsTagPrefixUsed = (tagPrefix, usedBy = []) => {
  const packagesGroupsConfig = PACKAGES_GROUPS_CONFIG || getPackagesGroupsConfig();
  const packagesGroups = Object.keys(packagesGroupsConfig);

  // Getting the package groups that are using the tag prefix
  usedBy = packagesGroups.filter(group => packagesGroupsConfig[group].tagPrefix === tagPrefix);

  // return packagesGroups.some(group => packagesGroupsConfig[group].tagPrefix === tagPrefix);
  return usedBy.length > 0;
};

// Check if an organization is already used in the package groups config
const isPackagesGroupsOrganizationUsed = (organization) => {
  const packagesGroupsConfig = PACKAGES_GROUPS_CONFIG || getPackagesGroupsConfig();
  const packagesGroups = Object.keys(packagesGroupsConfig);

  return packagesGroups.some(group => packagesGroupsConfig[group].organization === organization);
};

const arePackagesGroupsConfigUsed = ({ tagPrefix, organization }) => {
  return isPackagesGroupsTagPrefixUsed(tagPrefix) || isPackagesGroupsOrganizationUsed(organization);
};

// Find package.json files in the packages directory which contain a search string
const findPackageJsonFiles = (searchName, dir = PACKAGES_PATH, depth = 0) => {
  if (!dir || !searchName || depth > 3 || !fs.existsSync(dir)) {
    return [];
  }

  let results = [];
  const toIgnore = ['node_modules', 'coverage', 'dist', 'src', 'test', 'storybook-static'];

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Ignorar directorios del sistema
    if (file.startsWith('.') || toIgnore.includes(file)) {
      return;
    }

    if (stat && stat.isDirectory()) {
      results = [...results, ...findPackageJsonFiles(searchName, filePath, depth + 1)];
    } else {
      if (file === 'package.json') {
        const content = fs.readFileSync(filePath);
        const json = JSON.parse(content);
        const name = json.name || '';

        if (name === searchName) {
          results.push(filePath);
        }
      }
    }
  });

  return results;
};

// Export the variables
export {
  ON_CANCEL_EXIT_CODE,
  DEFAULT_TAG_PREFIX,
  DEFAULT_ORGANIZATION,
  ATOMIC_TYPES,
  VARS_TO_EXPORT,
  PACKAGES_PATH,
  PACKAGES_GROUPS,
  PACKAGES_GROUPS_CONFIG,
  PACKAGES_GROUPS_CHOICES,
  onCancel,
  getPackagesGroups,
  getPackagesGroupsConfig,
  savePackagesGroupsConfig,
  isPackagesGroupsTagPrefixUsed,
  isPackagesGroupsOrganizationUsed,
  arePackagesGroupsConfigUsed,
  getPackagesGroupsChoices,
  getFilenameDirname,
  trimRightDashes,
  findPackageJsonFiles,
};
