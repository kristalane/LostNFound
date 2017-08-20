
// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Stuff.findAll({}).then(function(dbStuff) {
      // var hbsObject = {
      //   burgers: dbBurger
      // };
      // console.log(hbsObject);
      // res.render("index", hbsObject);
    });
  });


  app.get("/api/stuff", function(req, res) {
    res.render("main");
  });

};
