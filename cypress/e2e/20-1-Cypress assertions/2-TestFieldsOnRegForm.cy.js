/// <reference types="cypress" />

describe("Name field validation", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    });
    afterEach(() => {
        cy.get("#signupName").clear();
        cy.get("button.close").click();
    });

    it("Valid name → no errors", () => {
        cy.get("#signupName").clear().type("Stanislav").blur();
        cy.get("#signupName").should("not.have.class", "is-invalid");
        cy.get(".invalid-feedback").should("not.exist");
    });

    it("Empty field → 'Name required'", () => {
        cy.get("#signupName").clear().blur();
        cy.get(".invalid-feedback").should("contain.text", "Name required");
        cy.get("#signupName").should("have.class", "is-invalid");
    });

    it("Only spaces → 'Name is invalid'", () => {
        cy.get("#signupName").clear().type(" ").blur();
        cy.get(".invalid-feedback").should("contain.text", "Name is invalid");
        cy.get("#signupName").should("have.class", "is-invalid");
    });

    it("1 character → length error", () => {
        cy.get("#signupName").clear().type("A").blur();
        cy.get(".invalid-feedback").should("contain.text", "Name has to be from 2 to 20 characters long");
        cy.get("#signupName").should("have.class", "is-invalid");
    });

    it("21 characters → length error", () => {
        cy.get("#signupName").clear().type("ABCDEFGHIJKLMNOPQRSTU").blur();
        cy.get(".invalid-feedback").should("contain.text", "Name has to be from 2 to 20 characters long");
        cy.get("#signupName").should("have.class", "is-invalid");
    });

    it("Non-English characters → 'Name is invalid'", () => {
        cy.get("#signupName").clear().type("Станіслав").blur();
        cy.get(".invalid-feedback").should("contain.text", "Name is invalid");
        cy.get("#signupName").should("have.class", "is-invalid");

        cy.get("#signupName").clear().type("斯坦尼斯拉夫").blur();
        cy.get(".invalid-feedback").should("contain.text", "Name is invalid");
        cy.get("#signupName").should("have.class", "is-invalid");
    });
});

describe("Last name field validation", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    });
    afterEach(() => {
        cy.get("#signupLastName").clear();
        cy.get("button.close").click();
    });

    it("Valid last name → no errors", () => {
        cy.get("#signupLastName").clear().type("Kolisnyk").blur();
        cy.get("#signupLastName").should("not.have.class", "is-invalid");
        cy.get(".invalid-feedback").should("not.exist");
    });
    it("Empty field → 'Last name required'", () => {
        cy.get("#signupLastName").clear().blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name required");
        cy.get("#signupLastName").should("have.class", "is-invalid");
    });

    it("Only spaces → 'Last name is invalid'", () => {
        cy.get("#signupLastName").clear().type(" ").blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name is invalid");
        cy.get("#signupLastName").should("have.class", "is-invalid");
    });
    it("1 character → length error", () => {
        cy.get("#signupLastName").clear().type("A").blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name has to be from 2 to 20 characters long");
        cy.get("#signupLastName").should("have.class", "is-invalid");
    });
    it("21 characters → length error", () => {
        cy.get("#signupLastName").clear().type("ABCDEFGHIJKLMNOPQRSTU").blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name has to be from 2 to 20 characters long");
        cy.get("#signupLastName").should("have.class", "is-invalid");
    });
    it("Non-English characters → 'Last name is invalid'", () => {
        cy.get("#signupLastName").clear().type("Колісник").blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name is invalid");
        cy.get("#signupLastName").should("have.class", "is-invalid");
        cy.get("#signupLastName").clear().type("科利斯尼克").blur();
        cy.get(".invalid-feedback").should("contain.text", "Last name is invalid");
        cy.get("#signupLastName").should("have.class", "is-invalid");
    });
});

describe("Email field validation", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    });
    afterEach(() => {
        cy.get("#signupEmail").clear();
        cy.get("button.close").click();
    });

    it("Valid email → no errors", () => {
        cy.get("#signupEmail").clear().type("test@example.com").blur();
        cy.get("#signupEmail").should("not.have.class", "is-invalid");
        cy.get(".invalid-feedback").should("not.exist");

        cy.get("#signupEmail").clear().type("my.name-12@domain.co.uk").blur();
        cy.get("#signupEmail").should("not.have.class", "is-invalid");
        cy.get(".invalid-feedback").should("not.exist");
    });

    it("Empty field → 'Email required'", () => {
        cy.get("#signupEmail").clear().blur();
        cy.get(".invalid-feedback").should("contain.text", "Email required");
        cy.get("#signupEmail").should("have.class", "is-invalid");
    });

    it("Invalid format → 'Email is incorrect'", () => {
        const invalidEmails = ["test", "test@", "@test.com", "test@com"];
        invalidEmails.forEach((email) => {
            cy.get("#signupEmail").clear().type(email).blur();
            cy.get(".invalid-feedback").should("contain.text", "Email is incorrect");
            cy.get("#signupEmail").should("have.class", "is-invalid");
        });
    });
});

describe("Password field validation", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    });
    afterEach(() => {
        cy.get("#signupPassword").clear();
        cy.get("button.close").click();
    });
    it("Valid passwords → no errors", () => {
        const validPasswords = ["Abcdefg1", "MyPass123", "Password1", "Test1234", "A1b2C3d4"];
        validPasswords.forEach((password) => {
            cy.get("#signupPassword").clear().type(password).blur();
            cy.get("#signupPassword").should("not.have.class", "is-invalid");
            cy.get(".invalid-feedback").should("not.exist");
            cy.get("#signupPassword").clear();
        });
    });

    it("Empty field → 'Password required'", () => {
        cy.get("#signupPassword").clear().blur();
        cy.get(".invalid-feedback").should("contain.text", "Password required");
        cy.get("#signupPassword").should("have.class", "is-invalid");
    });

    it("Less than 8 characters → 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'", () => {
        const invalidPasswords = ["Short1", "NoNumber", "NOLOWERCASE1", "nouppercase1"];
        invalidPasswords.forEach((password) => {
            cy.get("#signupPassword").clear().type(password).blur();
            cy.get(".invalid-feedback").should("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
            cy.get("#signupPassword").should("have.class", "is-invalid");
        });
    });

    it("More than 15 characters → same message", () => {
        cy.get("#signupPassword").clear().type("VeryLongPassword1").blur();
        cy.get(".invalid-feedback").should("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
        cy.get("#signupPassword").should("have.class", "is-invalid");
    });

    it("Without number → error", () => {
        cy.get("#signupPassword").clear().type("NoNumber").blur();
        cy.get(".invalid-feedback").should("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
        cy.get("#signupPassword").should("have.class", "is-invalid");
    });

    it("Without uppercase letter → error", () => {
        cy.get("#signupPassword").clear().type("nouppercase1").blur();
        cy.get(".invalid-feedback").should("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
        cy.get("#signupPassword").should("have.class", "is-invalid");
    });

    it("Without lowercase letter → error", () => {
        cy.get("#signupPassword").clear().type("NOLOWERCASE1").blur();
        cy.get(".invalid-feedback").should("contain.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
        cy.get("#signupPassword").should("have.class", "is-invalid");
    });
});

describe("Re-enter Password field validation", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    });
    afterEach(() => {
        cy.get("#signupRepeatPassword").clear();
        cy.get("button.close").click();
    });

    it("Valid re-entered password → no errors", () => {
        cy.get("#signupPassword").clear().type("MyPass123").blur();
        cy.get("#signupRepeatPassword").clear().type("MyPass123").blur();
        cy.get("#signupRepeatPassword").should("not.have.class", "is-invalid");
        cy.get(".invalid-feedback").should("not.exist");
    });

    it("Empty field → 'Re-enter password required'", () => {
        cy.get("#signupRepeatPassword").clear().blur();
        cy.get(".invalid-feedback").should("contain.text", "Re-enter password required");
        cy.get("#signupRepeatPassword").should("have.class", "is-invalid");
    });

    it("Non-matching passwords → 'Passwords do not match'", () => {
        cy.get("#signupPassword").clear().type("MyPass123").blur();
        cy.get("#signupRepeatPassword").clear().type("Different123").blur();
        cy.get(".invalid-feedback").should("contain.text", "Passwords do not match");
        cy.get("#signupRepeatPassword").should("have.class", "is-invalid");
    });
});
