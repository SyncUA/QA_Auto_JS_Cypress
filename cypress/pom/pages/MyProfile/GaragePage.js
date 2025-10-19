class GaragePage {
    get addNewCarButton() {
        return cy.get("dive.panel-page_heading .btn-primary");
    }

    get addNewCarFormHeader() {
        return cy.get(".modal-header").contains("Add New Car");
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
    get addCarButton() {
        return cy.get("button").contains("Add Car");
    }

    visit() {
        cy.visit("https://guest:guest@your-website.com/panel/garage");
    }
    addNewCar(brand, model, mileage) {
        this.addNewCarButton.click();
        this.addNewCarFormHeader.should("be.visible");
        this.brandDropdown.select(brand);
        this.modelDropdown.select(model);
        this.mieleageInput.type(mileage);
        this.addCarButton.click();
    }
    verifyLastCarAdded(brand, model, mileage) {
        cy.get(".car-list")
            .last()
            .within(() => {
                cy.get(".car-brand").should("contain", brand);
                cy.get(".car-model").should("contain", model);
                cy.get(".car-mileage").should("contain", mileage);
            });
    }
}

export default new GaragePage();
