CURRENT_DIRECTORY=$(pwd)
VARS_FILE="${CURRENT_DIRECTORY}/.new-wc-env.sh"
ENV_FILE="${CURRENT_DIRECTORY}/../.env"

# https://gist.github.com/mihow/9c7f559807069a03e302605691f85572?permalink_comment_id=3770333#gistcomment-3770333
# Local .env
# Importing variables from .env file using the ENV_FILE variable
export $(grep -v '^#' $ENV_FILE | xargs)

# Delete .new-wc-env.sh file if it exists
if [ -f $VARS_FILE ]; then
  rm $VARS_FILE
fi

# if ORGANIZATION is not set, then set it to the default value
if [ -z "$ORGANIZATION" ]; then
  ORGANIZATION="@izwc"
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

if [ -f $VARS_FILE ]; then
  . $VARS_FILE
else
  printf "Error: $VARS_FILE file not found"
  exit 1
fi

# Run the open-wc command with the arguments passed to this script
npm init -w packages/$WC_ATOMIC_TYPE @izwc@latest -- --organization $ORGANIZATION --destinationPath $WC_PATH --type scaffold --scaffoldType wc --features linting testing demoing --typescript $WC_TYPESCRIPT --tagName $WC_TAG --writeToDisk true --installDependencies npm

# Delete the .new-wc-env.sh file
rm -f $VARS_FILE
