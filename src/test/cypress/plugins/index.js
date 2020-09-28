/* cypress once opened emit events like file:preprocessor, task etc
for more details have a thorough look into cypress documentation. The method below is called during
open or reopen (hot reload) event of cypress
*/
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(["tsify", { project: "tsconfig.cypress.json" }]);

  on("file:preprocessor", cucumber(options));
};
