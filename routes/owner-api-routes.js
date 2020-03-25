var db = require("../models");

module.exports = function(app) {
  app.get("/api/owners", function(req, res) {
    db.Owner.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/owner/:id", function(req, res) {
    db.Owner.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("api/owner", function(req, res) {
    db.Owner.create({
      name: req.body.name,
      lastName: req.body.lastName,
      yearsOfExperience: req.body.yearsOfExperience,
      dogCount: req.body.dogCount
    }).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/owner/:id", function(req, res) {
    db.Owner.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
