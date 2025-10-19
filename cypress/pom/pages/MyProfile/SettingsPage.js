import RemoveAccountForm from "../../forms/RemoveAccountForm";
class Settings {
    get settingsButton() {
        return cy.contains("a.btn-sidebar", "Settings");
    }
    get removeAccountButton() {
        return cy.contains("button", "Remove my account");
    }
    clickSettingsButton() {
        this.settingsButton.click();
    }
    clickRemoveAccountButton() {
        this.removeAccountButton.click();
    }
    removeAccount() {
        this.clickSettingsButton();
        this.clickRemoveAccountButton();
        RemoveAccountForm.clickConfirmRemoveButton();
    }
}

export default new Settings();
