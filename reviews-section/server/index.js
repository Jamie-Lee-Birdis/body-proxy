const express = require('express');
const db = require('../database');

const app = express();
const port = 3002;

app.use('/', express.static('client/dist'));


app.get('/moist-air/reviews', (req, res, next) => {
  let gameID = req.query.gameID;
  if (gameID === '') { // default to hello kitty
    gameID = 1;
  }
  db.getReviews(gameID)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.patch('/moist-air/reviews', (req, res, next) => {
  var dataToChange = { key: req.query.key, val: req.query.value };
  db.updateReview(req.query.reviewID, dataToChange)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});