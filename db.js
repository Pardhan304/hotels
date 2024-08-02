const mongoose = require("mongoose");
require("dotenv").config();

// Defining the Mongodb connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
// Set up MongoDB connection
mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

// Get the Default Connection
// Mongoose Maintain a default connection object representing the MongoDB Connection
const db = mongoose.connection;

// Defining Eventlisteners for Database connection:

db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});

db.on("error", () => {
  console.log("MongoDB Connection error");
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Exporting the database connection
module.exports = db;

