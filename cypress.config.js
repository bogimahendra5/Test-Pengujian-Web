const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.bukalapak.com",
  },
  viewportWidth: 1100,
  viewportHeight: 660,
  hideXHR: true,
  watchForFileChanges: false,
});
