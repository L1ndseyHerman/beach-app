describe("logged-in-with-swimmer-role", () => {
  it("redirests to the beach page", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("Swimmer");
    cy.get("input").eq(1).type("1");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/beach");
    cy.get("h1").should("have.text", "Beach").should("be.visible");
  });

  //  TODO: Write more tests once you're done w the CSS for other components!
});
