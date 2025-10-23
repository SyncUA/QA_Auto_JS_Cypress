class AddExpenseForm {
    get AddExpenseFormHeader() {
        return cy.get(".modal-header").contains("Add an expense");
    }
    get closeButton() {
        return cy.get("button.close");
    }
    get vehicleDropdown() {
        return cy.get("#addExpenseCar");
    }

    get reportDateInput() {
        return cy.get("#addExpenseDate");
    }
    get mileageInput() {
        return cy.get("#addExpenseMileage");
    }
    get numberOfLitersInput() {
        return cy.get("#addExpenseLiters");
    }
    get totalCostInput() {
        return cy.get("#addExpenseTotalCost");
    }
    get cancelButton() {
        return cy.get("app-add-expense-modal .btn-secondary");
    }
    get addExpenseButton() {
        return cy.get("app-add-expense-modal .btn-primary");
    }

    checkFormIsVisible() {
        this.AddExpenseFormHeader.should("be.visible");
    }
    closeButtonClick() {
        this.closeButton.click();
    }
    vehicleDropdownSelect(vehicle) {
        this.vehicleDropdown.select(vehicle);
    }
    reportDateInputEnter(reportDate) {
        this.reportDateInput.click().clear().type(reportDate);
    }
    mileageInputEnter(mileage) {
        this.mileageInput.click().clear().type(mileage);
    }
    numberOfLitersInputEnter(numberOfLiters) {
        this.numberOfLitersInput.click().clear().type(numberOfLiters);
    }
    totalCostInputEnter(totalCost) {
        this.totalCostInput.click().clear().type(totalCost);
    }
    cancelButtonClick() {
        this.cancelButton.click();
    }
    addExpenseButtonClick() {
        this.addExpenseButton.click();
    }

    addExpense(vehicle, reportDate, mileage, numberOfLiters, totalCost) {
        this.checkFormIsVisible();
        this.vehicleDropdownSelect(vehicle);
        this.reportDateInputEnter(reportDate);
        this.mileageInputEnter(mileage);
        this.numberOfLitersInputEnter(numberOfLiters);
        this.totalCostInputEnter(totalCost);
        this.addExpenseButtonClick();
    }
}

export default new AddExpenseForm();
