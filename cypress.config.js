const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config))
  return config
}
module.exports = defineConfig({
  
  retries: {
    runMode: 1
  },
  projectId: "ohunp5",
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/features/distributer/*.{js,jsx,ts,tsx,feature}'],
    env: {
      url: 'https://rahulshettyacademy.com/angularpractice'
    }
  },
  
});


