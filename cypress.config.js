const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.staging.v2.workerhero.com',
    specPattern: 'cypress/integrations/**/*.js',
    retries: {
      // How many times to retry a failing test in 'cypress run'
      runMode: 2,
    }

  },
  video: true, 
  // Active l'enregistrement vidéo
  videoCompression: 32, // Compression de la vidéo (facultatif)
  videoUploadOnPasses: false, // Évite d'uploader les vidéos de tests réussis
  
  defaultCommandTimeout: 6000,
});/// <reference types='Cypress' />

