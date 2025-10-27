class HomePage {
    get SignUpButton() {
        return cy.get("button.hero-descriptor_btn.btn.btn-primary").should("have.text", "Sign up");
    }

    get SignInButton() {
        return cy.get("header button.btn-outline-white.header_signin").should("contain.text", "Sign In");
    }

    visit() {
        cy.visit("/");
    }

    openRegistrationForm() {
        this.SignUpButton.click();
    }
    openLogInForm() {
        this.SignInButton.click();
    }
}
export default new HomePage();
