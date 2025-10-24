class Logout {
    get logoutButton() {
        return cy.get("a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn");
    }
    clickLogoutButton() {
        this.logoutButton.click();
    }
}

export default new Logout();
