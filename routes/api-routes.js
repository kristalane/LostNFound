var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  app.get("/api/stuff", function(req, res) {
    db.Stuff.findAll({}).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });
//Why do we need this we're never calling a select all to display all

  app.post("/api/stuff", function(req, res) {
    db.stuff.create({
      itemtype: req.body.itemtype,
      size: req.body.size,
      color: req.body.color,
      attrib: req.body.attrib
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });

  app.delete("/api/stuff/:id", function(req, res) {
    db.stuff.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });

};
