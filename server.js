// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
// set up a static file server that points to the "client" directory
var bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);






app.listen(3000, function() {
  console.log('cool stuff on: 3000');
});