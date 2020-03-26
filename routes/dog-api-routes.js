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

  app.post("/api/create/dog", function(req, res) {
    db.Dog.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      bio: req.body.bio,
      energetic: req.body.energetic,
      social: req.body.social,
      aggressive: req.body.aggressive,
      color: req.body.color,
      longFur: req.body.longFur,
      type: req.body.type
    })
      .then(function(result) {
        // res.redirect(307, "/profile");
        res.json(result);
      })
      .catch(function(err) {
        res.status(401).json(err);
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
