// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@applitools/eyes-cypress/commands'


Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test for errors generated in the appication and not the cypress tests.
  return false;
});


beforeEach(() => {
  cy.visit('https://www.akveo.com/ngx-admin/');
  cy.get('nb-card-header').contains('Material Dark').click();
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
