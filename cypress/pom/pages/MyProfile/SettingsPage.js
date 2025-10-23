import RemoveAccountForm from "../../forms/RemoveAccountForm";

class SettingsPage {
    get settingsButton() {
        return cy.contains("a.btn.btn-white.btn-sidebar.sidebar_btn", "Settings");
    }
    get removeAccountButton() {
        return cy.contains("button", "Remove my account");
    }

    visitSettingsPage() {
        cy.visit("/panel/settings");
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

export default new SettingsPage();
