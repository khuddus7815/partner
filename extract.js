const fs = require("fs");
const { execSync } = require("child_process");

try {
  // Use node's built-in exec to run unzip
  execSync("unzip -o partner.zip", { stdio: "inherit" });
  console.log("Extraction completed");
} catch (error) {
  console.error("Extraction failed:", error.message);
}
