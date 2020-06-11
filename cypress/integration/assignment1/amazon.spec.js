import * as amazonPageObject from "../../pageObject/amazonObj";

describe("amazon ", () => {
  before(() => {
    cy.visit("https://www.amazon.com/");
  });

  it("side menu category click", () => {
    //provide the category you want to vist in below category constant
    const category = "Computers";
    amazonPageObject.sidemenu(category);
  });
});
