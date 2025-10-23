class EditCarForm {
    get editCarFormHeader() {
        return cy.get(".modal-header").contains("Edit a Car");
    }
    get closeButton() {
        return cy.get("button.close");
    }
    get brandDropdown() {
        return cy.get("#editCarBrand");
    }
    get modelDropdown() {
        return cy.get("#editCarModel");
    }
    get mileageInput() {
        return cy.get("#editCarMileage");
    }
    get createdDateInput() {
        return cy.get("#editCarCreatedDate");
    }
    get removeCarButton() {
        return cy.get("button").contains("Remove car");
    }
    get cancelButton() {
        return cy.get("button").contains("Cancel");
    }
    get saveChangesButton() {
        return cy.get("button").contains("Save changes");
    }
    checkFormIsVisible() {
        this.editCarFormHeader.should("be.visible");
    }
    closeButtonClick() {
        this.closeButton.click();
    }
    selectBrand(brand) {
        this.brandDropdown.select(brand);
    }
    selectModel(model) {
        this.modelDropdown.select(model);
    }
    enterMileage(mileage) {
        this.mileageInput.clear().type(mileage);
    }
    enterCreatedDate(date) {
        this.createdDateInput.clear().type(date);
    }
    clickRemoveCarButton() {
        this.removeCarButton.click();
    }
    clickCancelButton() {
        this.cancelButton.click();
    }
    clickSaveChangesButton() {
        this.saveChangesButton.click();
    }
    editCar(brand, model, mileage, date) {
        this.selectBrand(brand);
        this.selectModel(model);
        this.enterMileage(mileage);
        this.enterCreatedDate(date);
        this.clickSaveChangesButton();
    }
}
export default new EditCarForm();
