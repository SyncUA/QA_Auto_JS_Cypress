class RegistrationForm {
    get nameField() {
        return cy.get("#signupName");
    }
    get lastNameField() {
        return cy.get("#signupLastName");
    }
    get emailField() {
        return cy.get("#signupEmail");
    }
    get passwordField() {
        return cy.get("#signupPassword");
    }
    get repeatPasswordField() {
        return cy.get("#signupRepeatPassword");
    }
    get registerButton() {
        return cy.contains("button", "Register");
    }

    enterName(name) {
        this.nameField.click().type(name);
    }
    enterLastName(lastName) {
        this.lastNameField.click().type(lastName);
    }
    enterEmail(email) {
        this.emailField.click().type(email);
    }
    enterPassword(password) {
        this.passwordField.click().type(password, { sensitive: true });
    }
    enterRepeatPassword(repeatPassword) {
        this.repeatPasswordField.click().type(repeatPassword, { sensitive: true });
    }
    clickRegisterButton() {
        this.registerButton.click();
    }
    registerNewUser(name, lastName, email, password, repeatPassword) {
        this.enterName(name);
        this.enterLastName(lastName);
        this.enterEmail(email);
        this.enterPassword(password);
        this.enterRepeatPassword(repeatPassword);
        this.clickRegisterButton();
    }

    get EmptyNameMessage() {
        return cy.contains("Name required");
    }
    get WrongNameMessage() {
        return cy.contains("Name is invalid");
    }
    get WrongLengthNameMessage() {
        return cy.contains("Name has to be from 2 to 20 characters long");
    }
    get EmptyLastNameMessage() {
        return cy.contains("Last name required");
    }
    get WrongLastNameMessage() {
        return cy.contains("Last name is invalid");
    }
    get WrongLengthLastNameMessage() {
        return cy.contains("Last name has to be from 2 to 20 characters long");
    }

    get EmptyEmailMessage() {
        return cy.contains("Email required");
    }
    get WrongEmailMessage() {
        return cy.contains("Email is incorrect");
    }
    get EmptyPasswordMessage() {
        return cy.contains("Password required");
    }
    get WrongPasswordMessage() {
        return cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
    }
    get EmptyRepeatPasswordMessage() {
        return cy.contains("Re-enter password required");
    }
    get WrongRepeatPasswordMessage() {
        return cy.contains("Passwords do not match");
    }
}

export default new RegistrationForm();
