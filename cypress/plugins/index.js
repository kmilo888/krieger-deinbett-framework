/// <reference types="cypress" />
// ***********************************************************
// https://on.cypress.io/plugins-guide
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());
}