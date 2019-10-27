const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Defining methods for the booksController
module.exports = {
  findEmployees: function (req, res) {
    db.Shop.findAll({
      include: [db.Task],
      where: {
        onduty: true,
        level: "Tech"
      }
    })
      .then(function (dbModel) {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findUser: function (req, res) {
    console.log(req.body);
    db.Shop.findOne({
      include: [db.Task],
      where: {
        username: req.body.username,

      }
    })
      .then(function(shop) {
        console.log(shop)
        bcrypt.compare(req.body.password, shop.password, function (err, result) {
          if (result === true) {
            console.log(shop);
            res.json(shop)
          }
          else{
            res.send("Incorrect Password")
          }
        })
      })
          .catch(err => res.status(422).json(err));
      },
        createUser: function (req, res) {
          console.log(req.body);
          bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            db.Shop.create({
              username: req.body.username,
              password: hash,
              techname: req.body.techname,
              level: req.body.level
            })
              .then(dbModel => {
                console.log(dbModel);
                res.json(dbModel)
              })

              .catch(err => res.status(422).json(err));
          })
        },
        loggedInn: function (req, res) {
          db.Shop.update({ onduty: req.body.onduty }, {

            where: {
              username: req.body.username
            }
          })
            .then(function (dbPost) {
              res.json(dbPost);
            })
            .catch(err => res.status(422).json(err));
        },
        logoutuser: function (req, res) {
          db.Shop.update({ onduty: req.body.onduty, }, {

            where: {
              techname: req.body.employee
            }
          })
            .then(function (dbPost) {
              res.json(dbPost);
            })
            .catch(err => res.status(422).json(err));
        }
};


