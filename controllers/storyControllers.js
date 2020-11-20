const db = require("../models/User");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.User)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
