const prompts = require('prompts');

const TAG_PREFIX = 'izwc-';
const ATOMIC_TYPES = ['atoms', 'molecules', 'organisms', 'templates', 'pages'];

const VARS_TO_EXPORT = new Map([
  ['WC_NAME', ''],
  ['WC_TAG', TAG_PREFIX],
  ['WC_PATH', ''],
  ['WC_ATOMIC_TYPE', ATOMIC_TYPES[0]],
  ['WC_ATOMIC_TYPE_PATH', ''],
  ['WC_TYPESCRIPT', 'true'],
]);

const PACKAGE_PATH = '../packages';

const questions = [
  {
    type: 'select',
    name: 'atomicType',
    message: 'What is the atomic type of the new component?',
    choices: ATOMIC_TYPES.map(type => ({ title: type, value: type })),
  },
  {
    type: 'text',
    name: 'name',
    message: '',
    onRender(color) {
      const prefix = color.cyan(TAG_PREFIX);
      const spaces = color.red('Spaces');
      const hyphens = color.cyan('hyphens');
      const lowercase = color.cyan('lowercase');

      msg = `\n- ${prefix} will be used as the tag prefix (e.g. my-component -> ${prefix}my-component)`;
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
  // Ask the questions
  const response = await prompts(questions, {
    onCancel: () => {
      process.exit();
    },
  });

  // Format the response
  response.name = response.name.replace(/\s/g, '-').toLowerCase();
  response.tag = TAG_PREFIX + response.name;
  response.atomicType = response.atomicType;

  // Getting the new web component's path
  const path = require('path');
  const fs = require('fs');

  const atomicTypePath = `${PACKAGE_PATH}/${response.atomicType}`;
  const atomicTypeAbsolutePath = path.resolve(__dirname, atomicTypePath);

  const wcPath = `${atomicTypePath}/${response.tag}`;

  const wcAbsolutePath = path.resolve(__dirname, wcPath);
  const wcPathExists = fs.existsSync(wcAbsolutePath);

  // If the path already exists, exit the script
  if (wcPathExists) {
    console.error(`The path '${wcPath}' already exists.`);
    process.exit(1);
  }

  // Showing a summary of the new component
  console.log(`\nNew web component:\n- Tag: ${response.tag}\n- Path: ${wcAbsolutePath}\n- Typescript: ${response.useTypescript ? 'yes' : 'no'}\n`);

  // Ask for confirmation
  const confirmation = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Is this correct?',
    initial: true,
  }, {
    onCancel: () => {
      process.exit();
    },
  });

  // If the user doesn't confirm, exit the script
  if (!confirmation.value) {
    process.exit(1);
  }

  // Set the variables to export
  VARS_TO_EXPORT.set('WC_NAME', response.name);
  VARS_TO_EXPORT.set('WC_TAG', response.tag);
  VARS_TO_EXPORT.set('WC_PATH', wcAbsolutePath);
  VARS_TO_EXPORT.set('WC_ATOMIC_TYPE', response.atomicType);
  VARS_TO_EXPORT.set('WC_ATOMIC_TYPE_PATH', atomicTypeAbsolutePath);
  VARS_TO_EXPORT.set('WC_TYPESCRIPT', response.useTypescript);

  // Export the variables to the .new-wc-env.sh file
  const envFile = './.new-wc-env.sh';
  const envFileContent = Array.from(VARS_TO_EXPORT.entries())
    .map(([key, value]) => `export ${key}="${value}"`)
    .join('\n');

  fs.writeFileSync(envFile, envFileContent);

  // Exit the script
  process.exit(0);
})();
