/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import LoginForm from "../../pom/forms/LoginForm";
import SettingsPage from "../../pom/pages/MyProfile/SettingsPage";

describe("Login+Delete", () => {
    it("Login", () => {
        HomePage.visit();
        HomePage.openLogInForm();
        LoginForm.logingWithCredentials("stanislav.kolisnyk@example.com", "Password123!");
    });

    it("Delete Account", () => {
        HomePage.visit();
        HomePage.openLogInForm();
        LoginForm.logingWithCredentials("stanislav.kolisnyk@example.com", "Password123!");

        SettingsPage.removeAccount();
    });
});
