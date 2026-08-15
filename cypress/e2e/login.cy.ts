describe("temporary login page test", () => {
  it("says login", () => {
    cy.visit("http://localhost:5173/beach-app/#/login");

    cy.get("h1").should("have.text", "Login").should("be.visible");
    cy.get("p")
      .should("have.text", "Looking for my other websites? Click Here.")
      .should("be.visible");
    cy.get("a").should("have.text", "Here.").should("be.visible");

    cy.contains("That username and/or password is not in our system.").should(
      "not.exist",
    );

    cy.get("label").should("have.length", 2);
    cy.get("input").should("have.length", 2);

    cy.get("label").eq(0).should("have.text", "Username").should("be.visible");
    cy.get("input").eq(0).should("be.enabled");

    cy.get("label").eq(1).should("have.text", "Password").should("be.visible");
    cy.get("input").eq(1).should("be.enabled");

    cy.get("button")
      .should("have.text", "Login")
      .should("be.visible")
      .should("be.enabled");
  });
});
