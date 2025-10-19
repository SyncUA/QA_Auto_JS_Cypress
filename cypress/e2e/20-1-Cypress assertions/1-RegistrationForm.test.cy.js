/// <reference types="cypress" />

describe("Registration", () => {
    before(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });

    it("Check Registration form elements", () => {
        cy.get("button.hero-descriptor_btn.btn.btn-primary").should("have.text", "Sign up").click();
        cy.contains("h4", "Registration").should("be.visible");

        cy.contains("label", "Name").should("be.visible");
        cy.get("#signupName").should("exist").and("have.class", "ng-untouched").and("have.class", "ng-pristine").and("not.have.class", "is-invalid").clear().blur();
        cy.get("#signupName").should("exist").and("have.class", "ng-touched").and("have.class", "ng-pristine").and("have.class", "is-invalid");

        cy.contains("label", "Last name").should("be.visible");
        cy.get("#signupLastName").should("exist").and("have.class", "ng-untouched").and("have.class", "ng-pristine").and("not.have.class", "is-invalid").clear().blur();
        cy.get("#signupLastName").should("exist").and("have.class", "ng-touched").and("have.class", "ng-pristine").and("have.class", "is-invalid");

        cy.contains("label", "Email").should("be.visible");
        cy.get("#signupEmail").should("exist").and("have.class", "ng-untouched").and("have.class", "ng-pristine").and("not.have.class", "is-invalid").clear().blur();
        cy.get("#signupEmail").should("exist").and("have.class", "ng-touched").and("have.class", "ng-pristine").and("have.class", "is-invalid");

        cy.contains("label", "Password").should("be.visible");
        cy.get("#signupPassword").should("exist").and("have.class", "ng-untouched").and("have.class", "ng-pristine").and("not.have.class", "is-invalid").clear().blur();
        cy.get("#signupPassword").should("exist").and("have.class", "ng-touched").and("have.class", "ng-pristine").and("have.class", "is-invalid");

        cy.contains("label", "Re-enter password").should("be.visible");
        cy.get("#signupRepeatPassword").should("exist").and("have.class", "ng-untouched").and("have.class", "ng-pristine").and("not.have.class", "is-invalid").clear().blur();
        cy.get("#signupRepeatPassword").should("exist").and("have.class", "ng-touched").and("have.class", "ng-pristine").and("have.class", "is-invalid");

        cy.get("button.btn.btn-primary[disabled]").should("exist").and("have.text", "Register").and("be.visible");
    });

    after(() => {
        cy.get("button.close").click();
    });
});
