describe("logged-out-state", () => {
  //  This is kind of like the first test in LoginFormPage.test.tsx,
  //  with the addition of testing the redirect, which can't be tested in Vitest.
  it("redirects from the base url to /login and the LoginPageForm has the correct elements and text", () => {
    cy.visit("http://localhost:5173/beach-app");

    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

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

  //  This can't be tested in Vitest at all, glad I can test it here :)
  it("has a working link to my other website", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("a").click();

    cy.url().should("equal", "https://l1ndseyherman.github.io/my-app/#/");
  });

  //  So in Vitest I test multiple ways to get the error message,
  //  since that's the place to go way into detail with a component.
  //  Here, I'm just testing 1 way:
  it("displays the error message if you click the button after typing in a wrong username and/or password", () => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("Fake");
    cy.get("input").eq(1).type("-1");
    cy.get("button").click();

    cy.get("p")
      .eq(1)
      .should(
        "have.text",
        "That username and/or password is not in our system.",
      )
      .should("be.visible");
  });

  //  This can't be tested in Vitest at all, glad I can test it here :)
  it("will redirect you back to /login if you try to access a logged-in page", () => {
    cy.visit("http://localhost:5173/beach-app#/shallow_ocean");

    cy.url().should("equal", "http://localhost:5173/beach-app#/login");
  });
});
