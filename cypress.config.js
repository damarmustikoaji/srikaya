require('dotenv').config()
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 1000,
    setupNodeEvents(on, config) {
      require('./src/plugin')(config)
      return config
    },
    baseUrl: 'https://petstore.swagger.io',
    specPattern: 'cypress/integration/',
  },
  fixturesFolder: false,
  video: false,
})
