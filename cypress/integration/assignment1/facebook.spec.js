describe("facebook", () => {
  before(() => {
    //login controller
    //url visit
    //cy.fblogin() function written in cypress/support/command.js
    cy.fblogin();
  });

  it("facebook login", () => {
    //please provide your facebook name and password in cypress.env.json file
    const username = Cypress.env("userinfo").username;
    const pass = Cypress.env("userinfo").password;
    cy.get("[data-testid=royal_email]").type(username).wait(2000);
    cy.get("[data-testid=royal_pass]").type(pass).wait(2000);
    cy.get("#loginbutton").click();
  });
});
