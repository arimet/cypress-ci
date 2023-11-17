const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t1odjw",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
