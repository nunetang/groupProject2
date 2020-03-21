// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.post("/api/user", function(res, req) {
    db.User.create({
      name: req.body.name,
      address: req.body.address
    }).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/user/:id", function(res, req) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/user", function(res) {
    db.User.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  app.delete("/api/user/:id", function(res, req) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app.put("/api/user", function(res, req) {
    db.User.update(
      {
        name: req.body.name,
        address: req.body.address
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });
  app.post("/api/dog", function(res, req) {
    db.Dog.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      color: req.body.color,
      longFur: req.body.longFur,
      discription: req.body.discription,
      hyper: req.body.hyper,
      patient: req.body.patient
    }).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/dog", function(res) {
    db.Dog.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/dog/:id", function(res, req) {
    db.Dog.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app.delete("/api/dog/:id", function(res, req) {
    db.Dog.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app.put("/api/dog", function(res, req) {
    db.Dog.update(
      {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        color: req.body.color,
        longFur: req.body.longFur,
        discription: req.body.discription,
        hyper: req.body.hyper,
        patient: req.body.patient
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });
  app.post("/api/park", function(res, req) {
    db.Park.create({
      name: req.body.name,
      address: req.body.address,
      surface: req.body.surface,
      dogPlayGround: req.body.dogPlayGround
    }).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/park", function(res) {
    db.Park.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/park/:id", function(res, req) {
    db.Park.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app.delete("/api/park/:id", function(res, req) {
    db.Park.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  app
    .put("/api/park", function(res, req) {
      db.Park.update(
        {
          name: req.body.name,
          address: req.body.address,
          surface: req.body.surface,
          dogPlayGround: req.body.dogPlayGround
        },
        {
          where: {
            id: req.body.id
          }
        }
      );
    })
    .then(function(result) {
      res.json(result);
    });
};
