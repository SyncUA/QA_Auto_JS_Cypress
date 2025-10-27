import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";

// Формуємо таймстемп і шляхи
const timestamp = dayjs().format("YYYY-MM-DD_HH-mm-ss");
const outputDir = `cypress/reports/allure/${timestamp}`;
const resultsDir = `cypress/reports/allure-results`;
const targetResultsDir = path.join(outputDir, "allure-results");

// Генеруємо HTML-звіт
execSync(`allure generate ${resultsDir} --clean -o ${outputDir}`, { stdio: "inherit" });

// Переміщуємо JSON-файли у звіт
if (fs.existsSync(resultsDir)) {
    fs.mkdirSync(targetResultsDir, { recursive: true });

    for (const file of fs.readdirSync(resultsDir)) {
        const src = path.join(resultsDir, file);
        const dest = path.join(targetResultsDir, file);
        fs.renameSync(src, dest);
    }

    // Видаляємо порожню папку
    fs.rmdirSync(resultsDir);
    console.log(`✅ Переміщено allure-results у ${targetResultsDir}`);
} else {
    console.warn("⚠️ Папка allure-results не знайдена");
}

// Відкриваємо звіт
execSync(`allure open ${outputDir}`, { stdio: "inherit" });
