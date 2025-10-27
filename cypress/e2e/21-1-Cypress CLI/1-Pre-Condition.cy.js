/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import RegistrationForm from "../../pom/forms/RegistrationForm";
import LoginForm from "../../pom/forms/LoginForm";
import SettingsPage from "../../pom/pages/MyProfile/SettingsPage";

describe("Pre-condition", () => {
    it("Create user", () => {
        HomePage.visit();
        HomePage.openRegistrationForm();
        RegistrationForm.registerNewUser("Stanislav", "Kolisnyk", Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"), Cypress.env("TEST_USER_PASSWORD"));
    });
});
