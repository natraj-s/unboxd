const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var passport = require("passport");
var session = require("express-session");
const PORT = process.env.PORT || 3001;

var db = require("./models");

var localpassport = require("./config/passport/passport.js")(passport, db.User);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Add routes, both API and view
app.use(routes);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );

db.sequelize.sync({ force: false }).then(function() {
  console.log("DATABASE LOOKS FINE");
}).catch(function(err) {
  console.log(err, "Something went wrong")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
