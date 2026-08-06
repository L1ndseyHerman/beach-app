/*describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});*/

describe("temporary login page test", () => {
  it("says login", () => {
    cy.visit("http://localhost:5173/beach-app/#/login");
    cy.contains("Login").should("be.visible");
  });
});
