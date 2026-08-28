describe("logged-in-with-mermaid-role", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/beach-app");
    cy.url().should("equal", "http://localhost:5173/beach-app#/login");

    cy.get("input").eq(0).type("Mermaid");
    cy.get("input").eq(1).type("2");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/deep_ocean");
  });

  it("redirects to the /deep_ocean page with the right page content", () => {
    cy.get("label")
      .eq(0)
      .should("have.text", "Select a Page to View")
      .should("be.visible");
    cy.get("button").eq(0).should("be.visible").should("be.enabled");
    cy.get("input").eq(0).should("be.visible").should("be.enabled");

    cy.get("label")
      .eq(1)
      .should("have.text", "Welcome Mermaid")
      .should("be.visible");
    cy.get("button").eq(1).should("be.visible").should("be.enabled");
    cy.get("input").eq(1).should("be.visible").should("be.enabled");

    cy.get("h1").should("have.text", "Deep Ocean").should("be.visible");
  });

  it("opens the NavDropdown if you click the down arrow icon, and both urls are on there", () => {
    cy.get("button").eq(0).click();

    cy.get("li")
      .eq(0)
      .should("be.visible")
      .should("have.text", "Shallow Ocean");
    cy.get("li").eq(1).should("be.visible").should("have.text", "Deep Ocean");
  });

  it("lets you type to filter the options, partially and case-insensitively", () => {
    cy.get("input").eq(0).type("AlLoW");

    cy.get("li").should("be.visible").should("have.text", "Shallow Ocean");
  });

  it("shows the No Options text if you type something that's not contained in the 2 urls", () => {
    cy.get("input").eq(0).type("lOgIn");

    cy.get(".MuiAutocomplete-noOptions")
      .should("be.visible")
      .should("have.text", "No options");
  });

  it("lets you go to both urls", () => {
    cy.get("button").eq(0).click();
    cy.get("li").eq(1).click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/deep_ocean");

    cy.get("button").eq(0).click();
    cy.get("li").eq(0).click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/shallow_ocean");
  });

  //  These next three tests are also in Jest:
  it("opens the UserProfileDropdown if you click the down arrow icon, and the only option in it is Logout", () => {
    cy.get("button").eq(1).click();

    cy.get("li").should("be.visible").should("have.text", "Logout");
  });

  it("lets you type to filter the options, partially and case-insensitively", () => {
    cy.get("input").eq(1).type("lOG");

    cy.get("li").should("be.visible").should("have.text", "Logout");
  });

  it("shows the No Options text if you type something that's not contained in Logout", () => {
    cy.get("input").eq(1).type("lOgIn");

    cy.get(".MuiAutocomplete-noOptions")
      .should("be.visible")
      .should("have.text", "No options");
  });

  //  This one can only be done in Cypress :)
  it("lets you log out", () => {
    cy.get("button").eq(1).click();

    //  I made the link take up the whole li via CSS, that's not the default
    cy.get("li").click();

    cy.url().should("equal", "http://localhost:5173/beach-app#/login");
    cy.get("h1").should("have.text", "Login").should("be.visible");
  });

  it("sends you to the 404 page if you try to access a page your role doesn't have access to", () => {
    cy.visit("http://localhost:5173/beach-app#/beach");

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

  it("looks good at a mobile screen size too", () => {
    //  This is my Samsung Galaxy S22's width in pixels, I forget the exact height:
    cy.viewport(360, 700);

    cy.get("label")
      .eq(0)
      .should("have.text", "Select a Page to View")
      .should("be.visible");
    cy.get("button").eq(0).should("be.visible").should("be.enabled");
    cy.get("input").eq(0).should("be.visible").should("be.enabled");

    cy.get("label")
      .eq(1)
      .should("have.text", "Welcome Mermaid")
      .should("be.visible");
    cy.get("button").eq(1).should("be.visible").should("be.enabled");
    cy.get("input").eq(1).should("be.visible").should("be.enabled");

    cy.get("h1").should("have.text", "Deep Ocean").should("be.visible");
  });
});
