/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import RegistrationForm from "../../pom/forms/RegistrationForm";
import LoginForm from "../../pom/forms/LoginForm";
import SettingsPage from "../../pom/pages/MyProfile/SettingsPage";

describe("Post-condition", () => {
    it("Delete Account", () => {
        HomePage.visit();
        HomePage.openLogInForm();
        LoginForm.logingWithCredentials(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
        //Settings.visitSettingsPage();
        SettingsPage.removeAccount();
    });
});
