import js from "@eslint/js";
import globals from "globals";
import cypressPlugin from "eslint-plugin-cypress";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
    // === Jest тести ===
    {
        files: ["**/*.test.js"],
        languageOptions: {
            globals: { ...globals.jest }, // test, describe, expect, beforeEach, afterAll
        },
    },

    // === Cypress тести ===
    {
        files: ["**/*.{spec,test}.js", "cypress/e2e/**/*.cy.{js,ts}"],
        languageOptions: {
            globals: {
                ...globals.mocha, // describe, it, beforeEach, afterEach
                ...globals.cypress, // cy, Cypress
            },
        },
        plugins: { cypress: cypressPlugin },
    },

    // === Cypress конфігурація ===
    {
        files: ["cypress.config.js"],
        languageOptions: {
            globals: {
                ...globals.node, // require, process
                ...globals.cypress, // cy, Cypress якщо будуть імпортовані у конфігу
            },
        },
        plugins: { cypress: cypressPlugin },
    },

    // === Загальні JS/TS файли ===
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js, prettier },
        extends: ["js/recommended"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            semi: ["error", "always"],
            "prettier/prettier": "error",
            quotes: ["off", "single"],
            "no-console": "off",
            "no-unused-vars": "warn",
            "prefer-const": "warn",
            curly: ["error", "all"],
            "no-var": "error",
            eqeqeq: ["error", "always"],
            "no-multiple-empty-lines": ["error", { max: 1 }],
            "comma-dangle": ["warn", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "space-before-blocks": ["error", "always"],
            "keyword-spacing": ["error", { before: true, after: true }],
            "arrow-body-style": ["warn", "always"],
            "consistent-return": "error",
            "no-else-return": "warn",
            "no-lonely-if": "error",
        },
    },

    // === TypeScript рекомендовані правила ===
    tseslint.configs.recommended,
]);
