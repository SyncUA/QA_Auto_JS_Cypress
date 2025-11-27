import { defineConfig } from "cypress";
import fs from "fs";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const envFile = config.env.configFile || "prod";
            const pathToEnvFile = `cypress/env/${envFile}.env.json`;

            if (fs.existsSync(pathToEnvFile)) {
                const envConfig = JSON.parse(fs.readFileSync(pathToEnvFile));
                config.env = { ...config.env, ...envConfig };

                // Формуємо baseUrl у форматі https://username:password@host/
                if (envConfig.BASE_URL && envConfig.AUTH_USERNAME && envConfig.AUTH_PASSWORD) {
                    const cleanUrl = envConfig.BASE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
                    config.baseUrl = `https://${envConfig.AUTH_USERNAME}:${envConfig.AUTH_PASSWORD}@${cleanUrl}`;
                }
            } else {
                console.warn(`⚠️ Env file not found: ${pathToEnvFile}`);
            }

            // === 🔧 Додаємо логіку вибору репортера ===
            const selectedReporter = config.env.reporter || "mochawesome"; // дефолтний
            console.log(`Reporter selected: ${selectedReporter}`);

            if (selectedReporter === "mochawesome") {
                config.reporter = "mochawesome";
                config.reporterOptions = {
                    reportDir: "cypress/reports/mochawesome",
                    overwrite: false,
                    html: false,
                    json: true,
                    timestamp: true,
                };
            } else if (selectedReporter === "allure") {
                allureCypress(on, config, {
                    resultsDir: "cypress/reports/allure-results",
                });
            }

            return config;
        },

        retries: 0,
        specPattern: ["cypress/e2e/22-*/*.cy.{js,ts}", "!cypress/e2e/0-0-trash/**/*.cy.{js,ts}"],
    },
});
