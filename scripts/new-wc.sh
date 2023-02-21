# Delete .new-wc-env.sh file if it exists
if [ -f .new-wc-env.sh ]; then
  rm .new-wc-env.sh
fi

# Run new-wc.js with nodejs (using prompts package)
node ./new-wc.js

# Read the exit code from the last command
exit_code=$?
if [ $exit_code -ne 0 ]; then
  echo "Error: new-wc.js exited with code $exit_code"
  exit $exit_code
fi

# If the exit code is 0, then source the .new-wc-env.sh file
CURRENT_DIRECTORY=$(pwd)
VARS_FILE="${CURRENT_DIRECTORY}/.new-wc-env.sh"

if [ -f $VARS_FILE ]; then
  . $VARS_FILE
else
  echo "Error: .new-wc-env.sh file not found"
  exit 1
fi

# Create the atomic type directory if it doesn't exist
mkdir -p "$WC_ATOMIC_TYPE_PATH"

# Change directory to the atomic type directory
cd "$WC_ATOMIC_TYPE_PATH"

# Run the open-wc command with the arguments passed to this script
npm init @open-wc -- --type scaffold --scaffoldType wc --features linting testing demoing --typescript $WC_TYPESCRIPT --tagName "$WC_TAG" --writeToDisk true --installDependencies npm

# Change back to the root directory
cd "$CURRENT_DIRECTORY"
