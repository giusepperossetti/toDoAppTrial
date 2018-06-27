// Richiede Express

var express = require("express");
var bodyParser = require("body-parser");
var todoController = require("./controllers/todoController");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// Set up EJS template engine

app.set("view engine", "ejs");

// Static files

app.use(express.static("./public"));

// Fire controllers

todoController(app);

//Listen port

app.listen(3000);
console.log("You are listening to port 3000");
