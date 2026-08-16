describe("logged-in-with-mermaid-role", () => {
  it("redirects to the /deep_ocean page", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("Mermaid");
    cy.get("input").eq(1).type("2");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/deep_ocean");
    cy.get("h1").should("have.text", "Deep Ocean").should("be.visible");
  });

  //  TODO: Write more tests once you're done w the CSS for other components!
});
