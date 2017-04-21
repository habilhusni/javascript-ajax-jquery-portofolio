const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

const cors = require('cors')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', (req, res) => {
    res.send({
      color: randomWarna(),
      num: randomAngka()
    })
})

function randomWarna() {
  let hexa = '0123456789ABCDEF',
      color = '#'
  for(let i=0;i<6;i++){
    color += hexa[Math.floor(Math.random() * 16)]
  }
  return color
}

function randomAngka() {
  return Math.floor(Math.random() * 9) + 1
}

app.listen(3000, function(){
  console.log('App is now listening on port 3000');
})

module.exports = app;
