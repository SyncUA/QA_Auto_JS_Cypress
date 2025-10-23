/// <reference types="cypress" />

import GaragePage from "../../pom/pages/MyProfile/GaragePage";
import AddCarForm from "../../pom/forms/AddCarForm";
beforeEach(() => {
    cy.login(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
});
describe("Create Car", () => {
    it("Add Car", () => {
        GaragePage.clickAddNewCarButton();
        AddCarForm.checkFormIsVisible();
        AddCarForm.addNewCar("BMW", "X5", "0");
    });
});
