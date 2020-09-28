const fs = require("fs-extra");
const withFont = require("next-fonts");

module.exports = withFont({
 poweredByHeader: false,
  generateEtags: true,
  useFileSystemPublicRoutes: true,
  compression: false,
  pageExtensions: ["tsx"],
  env: getDotenvConfig(), 
});
function getDotenvConfig() {
  if(process.env.npm_lifecycle_event === 'start') {
    return {};
  }
  
  const APP_ENV = process.env.APP_ENV;

  const existingEnvironments = ["dev", "qa", "stage", "prod"];

  if (!Object.values(existingEnvironments).includes(APP_ENV)) {
    console.log(`App environment is not defined. Please define it as APP_ENV`);
    process.exit(1);
  }
    const environmentVariablesFile = `.env.${APP_ENV}`;

    if (!fs.existsSync(environmentVariablesFile)) {
      console.error(`App Environment config file '${environmentFilePath}' dose not exist.`);
      process.exit(1);
    }
  

  const importedConfig = require("dotenv").config({
    path: environmentVariablesFile
  });

  return {
    APP_ENV,
    ...(importedConfig && importedConfig.parsed? importedConfig.parsed: {}),
  };
}
