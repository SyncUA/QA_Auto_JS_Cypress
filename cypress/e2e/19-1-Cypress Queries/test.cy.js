describe("Header", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    });

    it('Check "Home" button', () => {
        cy.get("header a.btn.header-link.-active").should("contain.text", "Home");
    });
    it('Check "About" button', () => {
        cy.get("header button.btn.header-link").should("contain.text", "About");
    });
    it('Check "Contacts" button', () => {
        cy.get("header button.btn.header-link").should("contain.text", "Contacts");
    });
    it('Check "Guest log in" button', () => {
        cy.get("header button.header-link.-guest").should("contain.text", "Guest log in");
    });
    it('Check "Sign In" button', () => {
        cy.get("header button.btn-outline-white.header_signin").should("contain.text", "Sign In");
    });
    it('Check "Sign Up" button', () => {
        cy.get("button.hero-descriptor_btn.btn.btn-primary").should("contain.text", "Sign up");
    });
});

describe("Social Media", () => {
    beforeEach(() => {
        cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
        cy.get("footer").scrollIntoView();
    });

    it('Check "Facebook" button', () => {
        cy.get("span.socials_icon.icon.icon-facebook").should("exist");
    });
    it('Check "Telegram" button', () => {
        cy.get("span.socials_icon.icon.icon-telegram").should("exist");
    });
    it('Check "YouTube" button', () => {
        cy.get("span.socials_icon.icon.icon-youtube").should("exist");
    });
    it('Check "Instagram" button', () => {
        cy.get("span.socials_icon.icon.icon-instagram").should("exist");
    });
    it('Check "LinkedIn" button', () => {
        cy.get("span.socials_icon.icon.icon-linkedin").should("exist");
    });
    it('Check "ithillel.ua" link button', () => {
        cy.get("a.contacts_link.display-4").should("have.attr", "href", "https://ithillel.ua").and("contain.text", "ithillel.ua");
    });
    it('Check "support@ithillel.ua" link button', () => {
        cy.get("a.contacts_link.h4").should("have.attr", "href", "mailto:developer@ithillel.ua").and("contain.text", "support@ithillel.ua");
    });
});
