import prompts from 'prompts';
import { resolve } from 'path';
import { mkdirSync, writeFileSync } from 'fs';
import {
  DEFAULT_TAG_PREFIX,
  DEFAULT_ORGANIZATION,
  ATOMIC_TYPES,
  VARS_TO_EXPORT,
  PACKAGES_PATH,
  PACKAGES_GROUPS,
  PACKAGES_GROUPS_CONFIG,
  PACKAGES_GROUPS_CHOICES,
  onCancel,
  savePackagesGroupsConfig,
  isPackagesGroupsTagPrefixUsed,
  isPackagesGroupsOrganizationUsed,
  getFilenameDirname,
  trimRightDashes,
  findPackageJsonFiles,
} from './new-wc-globals.js';

const { __dirname } = getFilenameDirname(import.meta);

let finalTagPrefix = `${trimRightDashes(DEFAULT_TAG_PREFIX)}-`;

let finalOrganization = trimRightDashes(DEFAULT_ORGANIZATION);

const atomicTypesChoices = ATOMIC_TYPES.map(atomicType => ({
  title: atomicType,
  value: atomicType,
}));

// Regex to check if a string is valid with following conditions: it must be lowercase, alphanumeric, can contain hyphen, can't start with a number and can't finish with a hyphen
// Thanks to ChatGPT
const VALID_TAG_NAME_REGEX = /^(?!^[0-9])[\da-z]+(?:-[\da-z]+)*[^\W_](?<!-)$/g;
const VALID_TAG_NAME_TEXT = 'It must be lowercase, alphanumeric, can contain hyphen, can\'t start with a number or hyphen and can\'t finish with a hyphen';

// The questions to ask related to the package group
const packageGroupQuestions = [
  // Select the package group
  {
    type: 'select',
    name: 'packageGroup',
    message: 'Which package group do you want to add the new component to?',
    choices: PACKAGES_GROUPS_CHOICES,
  },
  // If the user wants to create a new package group, the user selected 'new' in the previous question
  {
    type: 'text',
    name: 'newPackageGroup',
    message: 'Enter the name of the new package group (e.g. my-package-group) (leave empty to cancel):',
    validate: value => {
      if (!value) {
        return true;
      }

      // Checking the value is valid
      if (!value.match(VALID_TAG_NAME_REGEX)) {
        return `Please enter a valid package group name (e.g. my-package-group). ${VALID_TAG_NAME_TEXT}`;
      }

      // Check if the package group already exists
      if (PACKAGES_GROUPS.includes(value)) {
        return 'The package group already exists';
      }

      return true;
    },
  },
  // Choose the tag prefix for the new package group
  {
    type: 'text',
    name: 'newPackageGroupTagPrefix',
    message: '',
    onRender(color) {
      // Trimming the last hyphens from the default tag prefix
      const defaultTagPrefixColor = color.cyan(finalTagPrefix);
      this.msg = `Enter the tag prefix for the new package group, the default prefix will be added, e.g. my -> ${defaultTagPrefixColor}my (leave empty to use the default: ${defaultTagPrefixColor}):`;
    },
    validate: value => {
      if (!value) {
        return true;
      }

      // Checking the value is valid
      if (!value.match(VALID_TAG_NAME_REGEX)) {
        return `Please enter a valid tag prefix (e.g. my). ${VALID_TAG_NAME_TEXT}`;
      }

      // Check if the tag prefix already exists
      let tagPrefixUsedBy = [];
      if (isPackagesGroupsTagPrefixUsed(value, tagPrefixUsedBy)) {
        // return 'The tag prefix already exists';
        console.log(`❕ The tag prefix already exists and is used by the following package groups: ${tagPrefixUsedBy.join(', ')}`);
      }

      return true;
    },
  },
  // Choose the organization for the new package group
  {
    type: 'text',
    name: 'newPackageGroupOrganization',
    message: '',
    onRender(color) {
      const defaultOrganization = trimRightDashes(finalOrganization);
      const defaultOrganizationColor = color.cyan(`${defaultOrganization}-`);
      const defaultOrganizationColorNoDash = color.cyan(defaultOrganization);
      this.msg = `Enter the organization for the new package group, the default organization will be added, e.g. foundations -> ${defaultOrganizationColor}foundations (leave empty to use the default: ${defaultOrganizationColorNoDash}):`;
    },
    validate: value => {
      if (!value) {
        return true;
      }

      // Checking the value is valid
      if (!value.match(VALID_TAG_NAME_REGEX)) {
        return `Please enter a valid organization (e.g. foundations). ${VALID_TAG_NAME_TEXT}`;
      }

      // Check if the organization already exists
      if (isPackagesGroupsOrganizationUsed(value)) {
        return 'The organization already exists';
      }

      return true;
    },
  },
];

// The questions to ask related to the new web component
const questions = [
  {
    type: 'select',
    name: 'atomicType',
    message: 'What is the atomic type of the new component?',
    choices: atomicTypesChoices,
  },
  {
    type: 'text',
    name: 'name',
    message: '',
    onRender(color) {
      const prefix = color.cyan(finalTagPrefix);
      const spaces = color.red('Spaces');
      const hyphens = color.cyan('hyphens');
      const lowercase = color.cyan('lowercase');

      let msg = `\n- ${prefix} will be used as the tag prefix (e.g. my-component -> ${prefix}my-component)`;
      msg += `\n- ${spaces} will be replaced by ${hyphens}`;
      msg += `\n- The name will be forced to ${lowercase}`;
      msg += `\n-\n- Enter your new web component\'s name?`;

      this.msg = msg;
    },
    validate: value => (isValidName(value) || nameValidateMessage),
  },
  {
    type: 'toggle',
    name: 'useTypescript',
    message: 'Do you want to use Typescript?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  }
];

let nameValidateMessage = '';

// Thanks to ChatGPT
// Check if the name is valid:
// - Must start with a letter
// - Must contain only alphanumeric characters
// - Must not start with a number
// - Can contain hyphens
// - Can contain spaces
// - Can't start or end with a hyphen or space
function isValidName(name) {
  nameValidateMessage = 'Please enter a valid tag name';

  if (!name) {
    nameValidateMessage += '. (Can\'t be empty)';
    return false;
  }

  // Must start with a letter
  if (!name[0].match(/[a-zA-Z]/)) {
    nameValidateMessage += '. (Must start with a letter)';
    return false;
  }

  // Must contain only alphanumeric characters, hyphens, and spaces
  if (!name.match(/^[\w\s-]+$/)) {
    nameValidateMessage += '. (Must contain only alphanumeric characters, hyphens, and spaces)';
    return false;
  }

  // Must not start with a number
  if (name[0].match(/\d/)) {
    nameValidateMessage += '. (Must not start with a number)';
    return false;
  }

  // Can't start or end with a hyphen or space
  if (/^[\s-]|[\s-]$/.test(name)) {
    nameValidateMessage += '. (Can\'t start or end with a hyphen or space)';
    return false;
  }

  return true;
}

(async () => {
  // Ask the questions related to the package group
  let finalPackageGroup = '';
  let finalPackageGroupTagPrefix = '';
  let finalPackageGroupOrganization = '';

  // Ask for the package group
  while (!finalPackageGroup) {
    const { packageGroup } = await prompts([packageGroupQuestions[0]], { onCancel });

    // If the user selected 'new', ask for the name of the new package group
    if (packageGroup === 'new') {
      const { newPackageGroup } = await prompts([packageGroupQuestions[1]], { onCancel });

      if (newPackageGroup) {
        finalPackageGroup = newPackageGroup;

        // Ask for the tag prefix and organization
        const { newPackageGroupTagPrefix, newPackageGroupOrganization } = await prompts(packageGroupQuestions.slice(2), { onCancel });
        finalPackageGroupTagPrefix = newPackageGroupTagPrefix;
        finalPackageGroupOrganization = newPackageGroupOrganization;

        // Adding the package group tag prefix to the final tag prefix
        if (finalPackageGroupTagPrefix) {
          finalTagPrefix += `${trimRightDashes(finalPackageGroupTagPrefix)}-`;
        }

        // Adding the package group organization to the final organization
        if (finalPackageGroupOrganization) {
          finalOrganization += `-${finalPackageGroupOrganization}`;
        }
      }
    }
    else {
      finalPackageGroup = packageGroup;

      // Get the tag prefix and organization from the selected package group
      const selectedPackageGroup = PACKAGES_GROUPS_CONFIG[packageGroup] || {};
      finalPackageGroupTagPrefix = selectedPackageGroup.tagPrefix || finalTagPrefix;
      finalPackageGroupOrganization = selectedPackageGroup.organization || finalOrganization;

      finalTagPrefix = `${trimRightDashes(finalPackageGroupTagPrefix)}-`;
      finalOrganization = trimRightDashes(finalPackageGroupOrganization);
    }
  }

  let packageGroupPath = `${PACKAGES_PATH}`;

  // If the selected package group is not empty, and it doesn't exist, create it, ask for confirmation
  if (finalPackageGroup !== 'empty') {
    // Create the package group
    packageGroupPath = `${PACKAGES_PATH}/${finalPackageGroup}`;

    // Check if the package group exists, otherwise create it
    if (!PACKAGES_GROUPS.includes(finalPackageGroup)) {
      const response = await prompts({
        type: 'confirm',
        name: 'createPackageGroup',
        message: `The package group '${finalPackageGroup}' doesn't exist. Do you want to create it?`,
        initial: true,
      }, { onCancel });

      if (!response.createPackageGroup) {
        onCancel();
      }

      const packageGroupAbsolutePath = resolve(__dirname, packageGroupPath);
      mkdirSync(packageGroupAbsolutePath);
      console.log(`\n✅ Created package group '${finalPackageGroup}' at '${packageGroupAbsolutePath}'\n`);

      // Save the new package group in the config file
      const packagesGroupsConfig = {
        ...PACKAGES_GROUPS_CONFIG,
        [finalPackageGroup]: {
          tagPrefix: finalTagPrefix,
          organization: finalOrganization,
        },
      };
      savePackagesGroupsConfig(packagesGroupsConfig);
    }
  }

  // Ask the questions
  const response = await prompts(questions, { onCancel });

  // Format the response
  response.name = response.name.replace(/\s/g, '-').toLowerCase();
  response.organization = finalOrganization;
  response.tagPrefix = finalTagPrefix;
  response.tag = response.name;
  response.atomicType = `${response.atomicType}`.toLowerCase() === 'none' ? '' : `/${response.atomicType}`.toLowerCase();

  // Check if the package already exists
  const searchName = `${response.organization}/${response.tag}`;
  const packagesFound = findPackageJsonFiles(searchName);
  if (packagesFound.length) {
    console.error(`\n❌💥 The package '${searchName}' already exists.\nPath: ${packagesFound.reduce((acc, curr) => `${acc}\n${curr}`)}\n`);
    process.exit(1);
  }

  // Getting the new web component's path
  const IZWC_PACKAGE_ATOMIC_PATH = `${packageGroupPath}${response.atomicType}`;
  const IZWC_ATOMIC_TYPE_PATH = resolve(__dirname, IZWC_PACKAGE_ATOMIC_PATH);
  const wcPath = `${IZWC_PACKAGE_ATOMIC_PATH}/${response.name}`;
  const IZWC_PATH = resolve(__dirname, wcPath);
  const IZWC_PACKAGE_GROUP = finalPackageGroup === 'empty' ? '' : finalPackageGroup;

  // Showing a summary of the new component
  console.log(`\nNew web component:\n- Organization: ${response.organization}\n- Name: ${response.name}\n- Tag: ${response.tagPrefix}${response.tag}\n- Path: ${IZWC_PATH}\n- Typescript: ${response.useTypescript ? 'yes' : 'no'}\n`);

  // Ask for confirmation
  const confirmation = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Is this correct?',
    initial: true,
  }, { onCancel });

  // If the user doesn't confirm, exit the script
  if (!confirmation.value) {
    process.exit(1);
  }

  // Set the variables to export
  VARS_TO_EXPORT.set('IZWC_ORGANIZATION', response.organization);
  VARS_TO_EXPORT.set('IZWC_NAME', response.name);
  VARS_TO_EXPORT.set('IZWC_TAG_PREFIX', response.tagPrefix);
  VARS_TO_EXPORT.set('IZWC_TAG', response.tag);
  VARS_TO_EXPORT.set('IZWC_PATH', IZWC_PATH);
  VARS_TO_EXPORT.set('IZWC_ATOMIC_TYPE', response.atomicType);
  VARS_TO_EXPORT.set('IZWC_ATOMIC_TYPE_PATH', IZWC_ATOMIC_TYPE_PATH);
  VARS_TO_EXPORT.set('IZWC_TYPESCRIPT', response.useTypescript);
  VARS_TO_EXPORT.set('IZWC_PACKAGE_GROUP', IZWC_PACKAGE_GROUP);
  VARS_TO_EXPORT.set('IZWC_PACKAGE_ATOMIC_PATH', IZWC_PACKAGE_ATOMIC_PATH);

  // Export the variables to the .new-wc-env.sh file
  const envFile = './.new-wc-env.sh';
  const envFileContent = Array.from(VARS_TO_EXPORT.entries())
    .map(([key, value]) => `export ${key}="${value}"`)
    .join('\n');

  writeFileSync(envFile, envFileContent);

  // Exit the script
  process.exit(0);
})();
