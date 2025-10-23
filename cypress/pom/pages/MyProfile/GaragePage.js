class GaragePage {
    get addNewCarButton() {
        return cy.get("button.btn.btn-primary").contains("Add car");
    }
    get editCarButton() {
        return cy.get(".car_edit.btn.btn-edit");
    }
    get addFuelExpenseButton() {
        return cy.get(".car_add-expense.btn.btn-success").contains("Add fuel expense");
    }

    visitGaragePage() {
        cy.visit("/panel/garage");
    }
    clickAddNewCarButton() {
        this.addNewCarButton.click();
    }
    clickEditCarButton() {
        this.editCarButton.click();
    }
    clickAddFuelExpenseButton() {
        this.addFuelExpenseButton.click();
    }
}

export default new GaragePage();
