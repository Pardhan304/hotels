const mongoose = require("mongoose");

// Defining the Mongodb connection URL
const mongoURL = "mongodb://127.0.0.1:27017/Hotels";

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

