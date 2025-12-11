const mode = process.env.NODE_ENV || "dev"; // dev, test, prod
const dotenv = require("dotenv");

// Load env file based on mode
dotenv.config({ path: `.env.${mode}` });

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || mode;
const DEBUG = process.env.DEBUG === "true";
const LOG_LEVEL = process.env.LOG_LEVEL || "info";
const DB_URL = process.env.DB_URL || "not-configured";

function log(level, message) {
  const levels = ["debug", "info", "error"];
  if (levels.indexOf(level) >= levels.indexOf(LOG_LEVEL)) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
}

app.get("/", (req, res) => {
  log("info", `Request received in ${ENV} environment`);
  if (DEBUG) {
    log("debug", `Debug mode is ON. DB_URL = ${DB_URL}`);
  }
  res.json({
    message: "Hello from Multi-Env DevOps App",
    environment: ENV,
    debug: DEBUG,
    logLevel: LOG_LEVEL,
    databaseUrl: DB_URL
  });
});

app.listen(PORT, () => {
  log("info", `Server running on port ${PORT} in ${ENV} mode`);
});

