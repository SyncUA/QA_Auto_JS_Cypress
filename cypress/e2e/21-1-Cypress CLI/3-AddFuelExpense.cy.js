/// <reference types="cypress" />

import AddExpenseForm from "../../pom/forms/AddExpenseForm";
import GaragePage from "../../pom/pages/MyProfile/GaragePage";
import FuelExpensesPage from "../../pom/pages/MyProfile/FuelExpensesPage";

beforeEach(() => {
    cy.login(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
});
describe("Add Fuel Expense", () => {
    it("Add Fuel Expense", () => {
        //GaragePage.clickAddFuelExpenseButton();
        //AddExpenseForm.addExpense("BMW X5", new Date().toLocaleDateString("uk-UA"), 100, 100, 100);
        FuelExpensesPage.clickFuelExpensesButton();
        //FuelExpensesPage.selectCarFromDropdown("BMW X5");
        FuelExpensesPage.clickAddAnExpenseButton();
        AddExpenseForm.addExpense("BMW X5", new Date().toLocaleDateString("uk-UA"), 200, 100, 100);
    });
});
