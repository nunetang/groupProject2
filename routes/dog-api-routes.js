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
    console.log("POST DOG")
    // console.log(req)
    // console.log(req.user)
    // console.log(req.body)
    req.body.OwnerId = req.user.id
    // console.log(req.body)

    db.Dog.create(req.body)
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
