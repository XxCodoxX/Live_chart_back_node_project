var express = require('express');
var bodyParser = require('body-parser');
var random = require ("./services/deviceService");
var cors = require('cors');




var app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) ;

// parse application/json
app.use(bodyParser.json()) ;

// routes
app.use(require('./routes/index'));

setInterval(()=> {
    random.updateRandomValue(100,500);
    console.log('Every 30 second');
  },30000)



//server start code
var server = app.listen( 8000, () => {
    console.log('Server is started ')
})