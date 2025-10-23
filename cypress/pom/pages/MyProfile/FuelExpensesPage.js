class FuelExpensesPage {
    get fuelExpensesButton() {
        return cy.contains("a.btn.btn-white.btn-sidebar.sidebar_btn", "Fuel expenses");
    }
    get fuelExpensesHeader() {
        return cy.get("h1.panel-page_heading.d-flex.flex-column.flex-lg-row").contains("Fuel expenses");
    }
    get carSelectDropdown() {
        return cy.get("#carSelectDropdown");
    }

    get addAnExpenseButton() {
        return cy.get("button.btn.btn-primary").contains("Add an expense");
    }

    clickFuelExpensesButton() {
        this.fuelExpensesButton.click();
    }
    checkFuelExpensesFormHeader() {
        this.fuelExpensesHeader.should("be.visible");
    }
    selectCarFromDropdown(car) {
        this.carSelectDropdown.select(car);
    }
    clickAddAnExpenseButton() {
        this.addAnExpenseButton.click();
    }
}

export default new FuelExpensesPage();
