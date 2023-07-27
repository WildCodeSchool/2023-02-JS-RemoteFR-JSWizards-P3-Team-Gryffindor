const models = require("../models");

const browse = (req, res) => {
  models.oeuvres
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.oeuvres
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const oeuvre = req.body;

  // TODO validations (length, format...)

  oeuvre.id = parseInt(req.params.id, 10);

  models.oeuvres
    .update(oeuvre)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const oeuvre = req.body;
  models.oeuvres
    .insert(oeuvre)
    .then(([result]) => {
      res.location(`/oeuvres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.oeuvres
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res, next) => {
  models.oeuvres
    .readForLogin(req.body)
    .then(([oeuvres]) => {
      if (oeuvres[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = oeuvres[0];
        next();
      } else {
        res.status(401).send("This mail doesn't exist in our database");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};
