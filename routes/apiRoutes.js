const express = require('express');
const router = require("express").Router();

const Transaction = require("../models/transaction.js");

router.post("/api/transactions", ({body}, res) => {
  Transaction.create(body)
    .then(transactions => {
      res.json(transactions);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transactions/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(transactions => {
      res.json(transactions);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transactions", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(transactions => {
      res.json(transactions);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});


module.exports = router;
