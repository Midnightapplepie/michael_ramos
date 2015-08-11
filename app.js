var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.set('port',3000);

//setting view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting view directory, where view engine will load templates
app.set('views',__dirname + '/views');

//app.use will enable specific folder to be accessed by express, enable sendFile/load file from such folder 
app.use(express.static(path.join(__dirname, 'asset')));

app.get('/',function(request,response){
	response.render("index")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});