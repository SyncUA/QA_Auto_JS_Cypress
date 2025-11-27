/// <reference types="cypress" />
import GaragePage from "../../pom/pages/MyProfile/GaragePage";
import AddCarForm from "../../pom/forms/AddCarForm";

describe("Create car and validate response", () => {
    it("Intercepting create car", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.login(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
        cy.intercept("POST", "/api/cars").as("createCar");

        GaragePage.clickAddNewCarButton();
        AddCarForm.checkFormIsVisible();
        AddCarForm.addNewCar("BMW", "X5", "0");

        cy.wait("@createCar").then(({ response }) => {
            expect(response.statusCode).to.eq(201);
            expect(response.body.status).to.eq("ok");
            expect(response.body.data).to.have.property("id");
            expect(response.body.data).to.have.property("brand", "BMW");
            expect(response.body.data).to.have.property("model", "X5");
            expect(response.body.data).to.have.property("mileage", 0);
            cy.wrap(response.body.data.id).as("createdCarId");
            console.log("Created Car ID:", response.body.data.id);
            cy.writeFile(`cypress/fixtures/response_last_car_created.json`, response.body);
        });
    });
});
