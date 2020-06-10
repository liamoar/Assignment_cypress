// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("fblogin", () => {
  cy.visit("https://www.facebook.com", {
    timeout: 50000, // increase total time for the visit to resolve
    failOnStatusCode: false,
    onBeforeLoad(contentWindow) {
      // contentWindow is the remote page's window object
      expect(typeof contentWindow === "object").to.be.true;
    },
    onLoad(contentWindow) {
      // contentWindow is the remote page's window object
      expect(typeof contentWindow === "object").to.be.true;
    },
  });
  cy.clearCookies();
  cy.reload();
});
