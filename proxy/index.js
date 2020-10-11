const express = require('express');
const app = express();
var cors = require('cors')
const path = require('path')
const port = 3000;
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')))
//let id = '';

// ////////////////hero
// app.get('/api/hero/all_info/:id', async (req, res) => {


//   axios.get(`http://localhost:3001/api/hero/all_info/${id}`)
//   .then((data)=>{
//     res.send(data.data);
//   })
//   .catch((err)=>{
//     if(err){
//       res.send('404');
//     }
//   })
//   })
////////////body
app.get('/moist-air/game',(req, res)=>{
  axios.get(`http://ec2-18-224-169-190.us-east-2.compute.amazonaws.com:3001/moist-air/game/?id=${req.query.id}`)
  .then((data)=>{
    console.log(data.data);
    res.send([data.data[0]]);
  })
  .catch((err)=>{
    res.status(404);
  })
})

// //////////////////reviews

// app.get('/moist-air/reviews', (req, res, next) => {
//   // let id = req.query.gameID;

//   axios.get(`http://localhost:3002/moist-air/reviews?gameID=${id}`)
//   .then(function (response) {
//     res.send(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// })



// app.patch('/moist-air/reviews', (req, res, next) => {
//   var dataToChange = { key: req.query.key, val: req.query.value };
//   let ids = req.query.reviewID;
//   let key = dataToChange.key;
//   let value = dataToChange.val;

//   axios.patch(`http://localhost:3002/moist-air/reviews?reviewID=${ids}&key=${key}&value=${value}`)
//   .then(function (response) {
//     res.send(response.data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// })

// app.get('/game',(req, res)=>{
//   if(Number.isNaN(parseInt(req.query.id)) || req.query.id === '0'){
//     id = 1;
//     res.sendFile(__dirname + '/public/index.html');
//   } else {
//     id = req.query.id;
//     res.sendFile(__dirname + '/public/index.html')
//   }
// })

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});