// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.visit("/");
    cy.get("header button.btn-outline-white.header_signin").should("contain.text", "Sign In").click();
    cy.get("#signinEmail").type(username);
    (cy.get("#signinPassword").type(password), { sensitive: true });
    cy.contains("button", "Login").click();
});

Cypress.Commands.add("logout", () => {
    cy.get("a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn").should("contain.text", " Log out ").click();
});

Cypress.Commands.add("loginViaAPI", () => {
    cy.request({
        method: "POST",
        url: "/api/auth/signin",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: {
            email: Cypress.env("TEST_USER_EMAIL"),
            password: Cypress.env("TEST_USER_PASSWORD"),
            remember: false,
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        const rawCookie = JSON.stringify(response.headers["set-cookie"]);
        cy.log("Set-Cookie Header:", rawCookie);
        const sidMatch = /sid=([^;]+)/.exec(rawCookie);
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

Cypress.Commands.add("logoutViaAPI", () => {
    cy.readFile("cypress/fixtures/user_sid.json").then((file) => {
        const sid = file.sid;
        cy.log("SID Cookie:", sid);
        if (!sid) {
            cy.log("⚠️ Cookie 'sid' не знайдено");
            return;
        }
        cy.request({
            method: "GET",
            url: "/api/auth/logout",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log("Logout response:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            // чистимо кукі після логауту
            cy.clearCookie("sid");
            cy.writeFile("cypress/fixtures/user_sid.json", {});
        });
    });
});

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        // turn off original log
        options.log = false;
        // create our own log with masked message
        Cypress.log({
            $el: element,
            name: "type",
            message: "*".repeat(text.length),
        });
    }

    return originalFn(element, text, options);
});
