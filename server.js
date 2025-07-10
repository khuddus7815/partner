const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the partner directory
app.use(express.static(path.join(__dirname, "partner")));

// Handle React Router routes - serve index.html for all non-asset requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "partner", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Partner Store App server running on port ${PORT}`);
  console.log(`Access the app at http://localhost:${PORT}`);
});
