const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const html = __dirname + 'src';
const bodyParser = require('body-parser')

// app.get('/', (req, res) =>{
//   app.use(express.static('src'))
//   res.sendFile(html + '/index.html');
// })

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(express.static(__dirname +'/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/dist/fww/index.html'));
});


// app.use(express.static(__dirname + '/index.html'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'src/index.html'))
// })


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200, function() {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});
