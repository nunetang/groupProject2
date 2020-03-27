/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });
  app.get("/day", isAuthenticated, (request, response) => {
    db.Park.findAll({
      include: [
        {
          model: db.Event,
          where: {
            date: request.params.date
          },
          required: false
        }
      ],
      order: [["name", "ASC"]]
    }).then(parks => {
      if (parks.length > 0) {
        parks = formatParksForHandlebars(parks);
        const date = formatDate(request.params.date);
      }
      response.sendFile(path.join(__dirname, "../public/day.html"));
    });
  });
};
//functions
function formatParksForHandlebars(parks) {
  for (let park of parks) {
    park.times = [
      {
        name: "Morning",
        range: "(7am - 12pm)",
        event: park.Events.find(event => event.time === "Morning")
      },
      {
        name: "Afternoon",
        range: "(12pm - 6pm)",
        event: park.Events.find(event => event.time === "Afternoon")
      },
      {
        name: "Evening",
        range: "(6pm - 10pm)",
        event: park.Events.find(event => event.time === "Evening")
      }
    ];
    park.Events = null;
  }
  return parks;
}

function formatDate(dateOnly) {
	  const date = new Date(dateOnly + "T00:00:00");
	  const dateString = date.toLocaleDateString("en-US", {
	    day: "numeric",
	    month: "long",
	    weekday: "long",
	    year: "numeric",
	  });
	  
	  return dateString;
}