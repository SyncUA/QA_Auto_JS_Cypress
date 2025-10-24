/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import RegistrationForm from "../../pom/forms/RegistrationForm";
import LoginForm from "../../pom/forms/LoginForm";
import Settings from "../../pom/pages/MyProfile/SettingsPage";
import Logout from "../../pom/pages/MyProfile/LogOut";

describe("Registration", () => {
    it("Check Registration+Logout", () => {
        HomePage.visit();
        HomePage.openRegistrationForm();
        RegistrationForm.registerNewUser("Stanislav", "Kolisnyk", "stanislav.kolisnyk@example.com", "Password123!", "Password123!");

        cy.contains("button", "Register").click();
        //logout
        Logout.clickLogoutButton();
    });
});
