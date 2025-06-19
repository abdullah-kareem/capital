const express = require("express");
const cors = require("cors");
const path = require("path"); // new for production
const routes = require("./routes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static admin panel
app.use("/admin", express.static(path.join(__dirname, "admin"))); // new for production

// API Routes
app.use("/api", routes);

// Error Handler
app.use(errorHandler);

module.exports = app;
