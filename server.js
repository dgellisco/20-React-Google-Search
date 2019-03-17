const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cors());
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});