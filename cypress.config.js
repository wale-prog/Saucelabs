const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: 'gav2sg',
  watchForFileChanges: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    experimentalPromptCommand: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    }
  },
});
