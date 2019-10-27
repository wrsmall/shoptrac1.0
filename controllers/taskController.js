const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createTask: function (req, res) {
    db.Task.create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findTask: function (req, res) {
    db.Task.findAll({
      where: {
        username: req.body.username

      }
    })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  updateAhead: function (req, res) {
    db.Task.update({status:req.body.status,},{

      where: {
        id: req.body.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },
  updateBehind: function (req, res) {
    db.Task.update({status:req.body.status,},{

      where: {
        id: req.body.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },
  updateBehind: function (req, res) {
    db.Task.update({status:req.body.status,},{

      where: {
        id: req.body.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },
  Complete: function (req, res) {
    db.Task.update({status:req.body.status,},{

      where: {
        id: req.body.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Task.destroy({
      where: {
          status:"Complete"
      }
    }).then(function(dbModel) {
      res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));
  }
}
