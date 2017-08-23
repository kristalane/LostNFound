var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  app.get("/api/getitems", function(req, res) {
    console.log(req.query.lost)
    db.stuff.findAll({
      where: {
          lost: req.query.lost
      } 
    }).then(function(dbStuff) {
          res.json(dbStuff);
      });
  });



  app.post("/api/postitem", function(req, res) {
    db.Stuff.create({
      itemtype: req.body.itemtype,
      size: req.body.size,
      color: req.body.color,
      location:req.body.location,
      attrib: req.body.attrib,
      lost: req.body.isLost
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });



  app.delete("/api/stuff/:id", function(req, res) {
    db.Stuff.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });

};
