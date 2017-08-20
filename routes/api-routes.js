var db = require("../models");


module.exports = function(app) {

    var lf = db.item
    // console.log(lf)


    app.get("/", function(req, res) {
        lf.findAll({}).then(function(results) {
            res.json(results)
        });
    });

    // app.post("/api/lost", function(req, res){
    //     lf.create({
    //         //waiting for db confirmation
    //     })

    };

