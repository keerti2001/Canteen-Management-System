const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * from items", (err, data) => {
    err ? res.send(err) : res.json({ item: data });
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * from items where item_id=${id}`, (err, data) => {
    err ? res.send(err) : res.json({ item: data });
  });
});

module.exports = router;
