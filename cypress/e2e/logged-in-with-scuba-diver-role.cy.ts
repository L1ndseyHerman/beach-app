describe("logged-in-with-scuba-diver-role", () => {
  it("redirects to the /beach page", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("ScubaDiver");
    cy.get("input").eq(1).type("0");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/beach");
    cy.get("h1").should("have.text", "Beach").should("be.visible");
  });

  it("sends you to the 404 page if you try to access a page your role doesn't have access to", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("ScubaDiver");
    cy.get("input").eq(1).type("0");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/beach");
    cy.get("h1").should("have.text", "Beach").should("be.visible");

    //  The ScubaDiver role has access to all the pages,
    //  so let's try a page that really doesn't exist:
    cy.visit("http://localhost:5173/beach-app#/doesnt_exist");

    cy.url().should("equal", "http://localhost:5173/beach-app#/404");
    cy.get("h1").should("have.text", "404").should("be.visible");
    //  Like in Jest, there isn't an easy way to test that the broken link svg is present.
    //  I could add a testId to it,
    //  but eh, it's just kind of a decoration like the red border on the div.
    cy.get("p")
      .should(
        "have.text",
        "Aww snap, the page you are looking for doesn't exist!",
      )
      .should("be.visible");
  });

  //  TODO: Write more tests once you're done w the CSS for other components!
});
