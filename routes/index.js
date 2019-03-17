const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const express = require("express");
const app = express();

// API Routes
router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

module.exports = router;
