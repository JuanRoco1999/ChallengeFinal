const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mi Reporte de Pruebas',
    embeddedScreenshots: true,
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
  },
});
