const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path')
const port = 3003;
const Game = require('../db/index.js');

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/moist-air/game',(req, res)=>{
  let data = Game.find({});
  data.exec((err, gameData)=>{
    if(err){
      res.send('there was an error');
    } else {
      res.send(gameData);
    }
  })
})

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});

module.exports.app = app;
module.exports.server = server;