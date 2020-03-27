var db = require("../models");

module.exports = function(app) {
  app.get("/api/dogs", function(req, res) {
    db.Dog.findAll({
      include: [db.Owner]
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  //Get call to return dogs based on User (OwnerID field in Dogs table)
  app.get("/api/dogs/:id", function(req, res) {
    db.Dog.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbDog) {
      res.json(dbDog);
    });
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json(req.user);
    }
  });

  app.post("/api/create/dog", function(req, res) {
    console.log("POST DOG");
    // console.log(req)
    // console.log(req.user)
    // console.log(req.body)
    req.body.ownerId = req.user.id;
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
