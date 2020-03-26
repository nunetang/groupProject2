var db = require("../models");

module.exports = function(app) {
  app.get("/api/dogs", function(req, res) {
    db.Dog.findAll({
      include: [db.Owner]
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  app.get("/api/dogs/:id", function(req, res) {
    db.Dog.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Owner]
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  app.post("api/dogs", function(req, res) {
    db.Dog.create(req.body).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  app.delete("/api/dogs/:id", function(req, res) {
    db.Dog.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });
};
