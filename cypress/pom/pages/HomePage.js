class HomePage {
    get homeButton() {
        return cy.get("a.header-link").should("contain.text", "Home");
    }
    get aboutButton() {
        return cy.get('button[appscrollto="aboutSection"]').should("contain.text", "About");
    }
    get contactsButton() {
        return cy.get('button[appscrollto="contactsSection"]').should("contain.text", "Contacts");
    }
    get guestLoginButton() {
        return cy.get("button.header-link.-guest").should("contain.text", "Guest log in");
    }

    get SignUpButton() {
        return cy.get("button.hero-descriptor_btn.btn.btn-primary").should("have.text", "Sign up");
    }

    get SignInButton() {
        return cy.get("button.header_signin").should("contain.text", "Sign In");
    }

    visit() {
        cy.visit("/");
    }
    clickHomeButton() {
        this.homeButton.click();
    }
    clickAboutButton() {
        this.aboutButton.click();
    }
    clickContactsButton() {
        this.contactsButton.click();
    }
    clickGuestLoginButton() {
        this.guestLoginButton.click();
    }

    openRegistrationForm() {
        this.SignUpButton.click();
    }
    openLogInForm() {
        this.SignInButton.click();
    }
}
export default new HomePage();
