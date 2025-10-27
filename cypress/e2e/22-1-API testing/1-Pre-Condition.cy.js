/// <reference types="cypress" />

describe("Pre-condition", () => {
    it("Create user via API", () => {
        cy.request({
            method: "POST",
            url: "/api/auth/signup",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: {
                name: "Stanislav",
                lastName: "Kolisnyk",
                email: Cypress.env("TEST_USER_EMAIL"),
                password: Cypress.env("TEST_USER_PASSWORD"),
                repeatPassword: Cypress.env("TEST_USER_PASSWORD"),
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            const rawCookie = response.headers["set-cookie"];
            cy.log("Set-Cookie Header:", rawCookie);
            const sidMatch = /sid=([^;]+)/.exec(rawCookie?.[0] || "");
            cy.log("SID Match:", sidMatch);
            if (sidMatch && sidMatch[1]) {
                const sid = decodeURIComponent(sidMatch[1]);
                cy.setCookie("sid", sid);
                cy.wrap(sid).as("sid");
                const fileName = `cypress/fixtures/user_sid.json`;
                cy.writeFile(fileName, { sid: sid, userId: response.body.data.userId, time: new Date().toLocaleString("uk-UA") });
            } else {
                throw new Error("SID не знайдено в Set-Cookie");
            }
        });
    });
});
describe("Vyishly i zayshly normalʹno.", () => {
    it("Logout via API", () => {
        cy.logoutViaAPI();
    });

    it("Login via API", () => {
        cy.loginViaAPI();
    });
});
