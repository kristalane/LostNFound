var db = require("../models");


module.exports = function(app) {

    var lf = db.lost_and_found


    app.get("/", function(req, res) {

        lf.findAll({}).then(function(results) {
            res.json(results)
        });

    });

