class RemoveAccountForm {
    get confirmRemoveButton() {
        return cy.get("button.btn.btn-danger").contains("Remove");
    }

    clickConfirmRemoveButton() {
        this.confirmRemoveButton.click();
    }
}

export default new RemoveAccountForm();
