describe("home test", () => {
  it("display the home page", () => {
    cy.visit("/");
    cy.contains("Full Stack JavaScript Starter Kit");
  });
});
