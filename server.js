// Global dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Establish PORT Connection
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static files to public folder 
app.use(express.static("public"));

// Mongoose connect (workout database) and also added extra info for deprecations
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

// Routes 
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Initiate server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});