import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import mochawesomeMerge from "mochawesome-merge";

// === 1. Таймстемп і робочий шлях ===
const now = new Date();
const timestamp = now.toISOString().replace(/[:.]/g, "-").replace("T", "_").slice(0, 19);

// Папка для звітів відносно кореня проєкту
const reportDir = path.join(process.cwd(), "cypress", "reports", "mochawesome", timestamp);
fs.mkdirSync(reportDir, { recursive: true });

// Шляхи для об'єднаного JSON та HTML
const combinedJsonPath = path.join(reportDir, "combined.json");
const htmlFilename = `combined_${timestamp}.html`;

// === 2. Беремо всі JSON-файли з базової папки mochawesome ===
const baseReportDir = path.join(process.cwd(), "cypress", "reports", "mochawesome");
const reportFiles = fs
    .readdirSync(baseReportDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.join(baseReportDir, f));

if (reportFiles.length === 0) {
    console.error("❌ No mochawesome JSON files found to merge.");
    process.exit(1);
}

console.log("Found JSON files:", reportFiles);

// === 3. Об’єднуємо JSON-и та генеруємо HTML ===
(async () => {
    try {
        const report = await mochawesomeMerge.merge({ files: reportFiles });

        // записуємо combined.json
        fs.writeFileSync(combinedJsonPath, JSON.stringify(report, null, 2));
        console.log(`✅ Merged ${reportFiles.length} JSON files.`);

        // переміщаємо оригінальні JSON-и у нову папку
        reportFiles.forEach((file) => {
            const filename = path.basename(file);
            const dest = path.join(reportDir, filename);
            fs.renameSync(file, dest);
        });
        console.log(`✅ Moved original JSON files to: ${reportDir}`);

        // Генеруємо HTML з --inline
        execSync(`npx marge "${combinedJsonPath}" --reportDir "${reportDir}" --reportFilename "${htmlFilename}" --inline`);
        console.log(`✅ HTML report saved to: ${path.join(reportDir, htmlFilename)}`);

        // Відкриваємо HTML на Windows
        if (process.platform === "win32") {
            execSync(`start "" "${path.join(reportDir, htmlFilename)}"`);
        }
    } catch (err) {
        console.error("❌ Merge failed:", err);
    }
})();
