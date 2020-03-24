var db = require("../models");

module.exports = function(app) {
  app.get("/api/parks", function(req, res) {
    db.Park.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/park/:id", function(req, res) {
    db.Park.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("api/park", function(req, res) {
    db.Park.create({
      name: req.body.name,
      city: req.body.city,
      ocupacy: req.body.ocupacy,
      dogPlayground: req.body.dogPlayground
    }).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/park/:id", function(req, res) {
    db.Park.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
