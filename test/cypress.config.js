const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "TestCI",
  defaultCommandTimeout: 20000,
  viewportWidth: 1340,
  viewportHeight: 660,
//  viewportWidth: 1920,
//  viewportHeight: 1080,
  chromeWebSecurity: false,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.CYPRESS_baseUrl || 'http://example.com';
      config.chromeWebSecurity = false;
      config.env.ignoreTestFiles = false; // Ignorar errores SSL
      return config;
    },
  },
});
