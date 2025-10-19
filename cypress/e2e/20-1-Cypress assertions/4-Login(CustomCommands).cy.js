/// <reference types="cypress" />

it("should login with valid credentials(CC)", () => {
    cy.login("stanislav.kolisnyk@example.com", "Password123!");
    cy.logout();
});
