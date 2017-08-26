
// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var lol = require('lol');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

// this is the root/home page.

  app.get("/", function(req, res){
    console.log(lol());
    console.log("here")
    res.sendFile(path.resolve(path.join(__dirname, "..", "views", "layouts", "home.html")));
  })

// this route is for a user who says they lost an item - will display all found items.


  app.get("/lost", function(req, res) {
    console.log(lol());
    console.log("here lost")
    res.sendFile(path.resolve(path.join(__dirname, "..", "views", "layouts", "lost.html")))
  });

// this route is for a user who says they found an item - will display all lost items

  app.get("/found", function(req, res){
    console.log(lol());
    console.log("here found")
    res.sendFile(path.resolve(path.join(__dirname, "..", "views", "layouts", "found.html")))
  });
};
