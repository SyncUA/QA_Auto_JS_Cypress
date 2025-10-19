class LoginForm {
    get emailField() {
        return cy.get("#signinEmail");
    }
    get passwordField() {
        return cy.get("#signinPassword");
    }
    get loginButton() {
        return cy.contains("button", "Login");
    }

    get wrongDataMessage() {
        return cy.contains("Wrong email or password");
    }
    get emptyEmailMessage() {
        return cy.contains("Email required");
    }
    get emptyPasswordMessage() {
        return cy.contains("Password required");
    }
    get invalidEmailMessage() {
        return cy.contains("Email is incorrect");
    }

    enterEmail(email) {
        this.emailField.click().type(email);
    }
    enterPassword(password) {
        this.passwordField.click().type(password, { sensitive: true });
    }
    clickLoginButton() {
        this.loginButton.click();
    }

    logingWithCredentials(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }
}

export default new LoginForm();
