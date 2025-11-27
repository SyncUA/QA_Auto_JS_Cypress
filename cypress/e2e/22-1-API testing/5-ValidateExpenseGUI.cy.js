/// <reference types="cypress" />

import FuelExpensesPage from "../../pom/pages/MyProfile/FuelExpensesPage";

beforeEach(() => {
    cy.login(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
});
describe("Validate Fuel Expense", () => {
    it("Validate parameters", () => {
        const today = (() => {
            const d = new Date();
            const day = String(d.getDate()).padStart(2, "0");
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const year = d.getFullYear();
            return `${day}.${month}.${year}`;
        })();

        FuelExpensesPage.clickFuelExpensesButton();

        cy.get("#carSelectDropdown").should("contain", "BMW X5");

        cy.get("table.expenses_table thead tr").within(() => {
            cy.get("th").eq(0).should("contain", "Date");
            cy.get("th").eq(1).should("contain", "Mileage");
            cy.get("th").eq(2).should("contain", "Liters used");
            cy.get("th").eq(3).should("contain", "Total cost");
        });

        cy.get("table.expenses_table tbody tr")
            .first()
            .within(() => {
                cy.get("td").eq(0).should("contain", today);
                cy.get("td").eq(1).should("contain", "300");
                cy.get("td").eq(2).should("contain", "30L");
                cy.get("td").eq(3).should("contain", "3000.00 USD");
            });
    });
});
