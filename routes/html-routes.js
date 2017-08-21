
// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

// this is the root/home page.
// TODO: add html file name
  app.get("/", function(req, res){
    res.send("#");
  })

// this route is for a user who says they lost an item - will display all found items.
// TODO: add html file name
  app.get("/lost", function(req, res) {
    db.Stuff.findAll({
      where: {
        lost: false
      }
    }).then(function(dbStuff) {
      res.render("#");
    });
  });

// this route is for a user who says they found an item - will display all lost items
// TODO: add html file names
  app.get("/found", function(req, res){
    db.Stuff.findAll({
      where: {
        lost: true
      }
    });then(function(dbStuff){
      res.render("#");
    });
  });
};
