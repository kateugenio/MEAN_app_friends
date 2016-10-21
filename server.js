var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// ROUTES //////////////////////
require('./server/config/routes.js')(app);
///////////////////////////////

// MONGODB //////////////////////
require('./server/config/mongoose.js')
///////////////////////////////

// process.env.TZ = 'America/Managua';
// console.log(new Date());

app.listen(port, function(){
  console.log(`Listening on ${port}`);
})
