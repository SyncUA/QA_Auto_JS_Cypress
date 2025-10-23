// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Умовне підключення Allure, тільки якщо reporter=allure
if (Cypress.env("reporter") === "allure") {
    // динамічний імпорт
    import("allure-cypress")
        .then((module) => {
            // Модуль підключився, нічого додатково робити не потрібно
        })
        .catch((err) => {
            console.error("Failed to load allure-cypress:", err);
        });
}
