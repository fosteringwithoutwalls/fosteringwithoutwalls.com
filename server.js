const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname,'/dist/fww/index.html')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/dist/fww/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200, function() {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});
