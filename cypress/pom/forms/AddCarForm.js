class AddCarForm {
    get addNewCarFormHeader() {
        return cy.get("h4.modal-title").contains("Add a car");
    }
    get closeButton() {
        return cy.get("button.close");
    }
    get brandDropdown() {
        return cy.get("#addCarBrand");
    }
    get modelDropdown() {
        return cy.get("#addCarModel");
    }
    get mieleageInput() {
        return cy.get("#addCarMileage");
    }
    get cancelButton() {
        return cy.get("app-add-car-modal .btn-secondary");
    }
    get addCarButton() {
        return cy.get("app-add-car-modal .btn-primary");
    }

    checkFormIsVisible() {
        this.addNewCarFormHeader.should("be.visible");
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
        this.mieleageInput.type(mileage);
    }
    clickAddCarButton() {
        this.addCarButton.should("not.be.disabled").click();
    }
    clickCancelButton() {
        this.cancelButton.click();
    }

    addNewCar(brand, model, mileage) {
        this.checkFormIsVisible();
        this.selectBrand(brand);
        this.selectModel(model);
        this.enterMileage(mileage);
        this.clickAddCarButton();
    }
}
export default new AddCarForm();
