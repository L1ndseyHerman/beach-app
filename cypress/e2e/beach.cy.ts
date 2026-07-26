/*describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});*/

describe("temporary beach page test", () => {
  it("says beach", () => {
    cy.visit("http://localhost:5173/beach-app/#/beach");
    cy.contains("Beach").should("be.visible");
  });
});
