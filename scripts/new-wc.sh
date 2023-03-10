CURRENT_DIRECTORY=$(pwd)
VARS_FILE="${CURRENT_DIRECTORY}/.new-wc-env.sh"

# Delete .new-wc-env.sh file if it exists
if [ -f $VARS_FILE ]; then
  rm $VARS_FILE
fi

# Run new-wc.js with nodejs (using prompts package)
node ./new-wc.js

# Read the exit code from the last command
exit_code=$?
if [ $exit_code -ne 0 ]; then
  # Exit code 89 means that the user pressed Ctrl+C
  if [ $exit_code -ne 89 ]; then
    echo "Error: new-wc.js exited with code $exit_code"
  fi

  exit $exit_code
fi

# Source the .new-wc-env.sh file
if [ -f $VARS_FILE ]; then
  . $VARS_FILE
else
  printf "Error: $VARS_FILE file not found"
  exit 1
fi

# Run the open-wc command with the arguments passed to this script
npm init -w packages/$IZWC_PACKAGE_ATOMIC_PATH @interzero@latest -- --organization $IZWC_ORGANIZATION --destinationPath $IZWC_PATH \
  --type scaffold --scaffoldType wc --features linting testing demoing --typescript $IZWC_TYPESCRIPT \
  --tagPrefix $IZWC_TAG_PREFIX --tagName $IZWC_TAG --writeToDisk true --installDependencies npm

# Delete the .new-wc-env.sh file
rm -f $VARS_FILE
