var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');

var app = express();

app.set('port',3000);
app.use(express.static(path.join(__dirname, 'asset')));

app.get('/',function(request,response){
	response.sendFile(__dirname + '/views/index.html')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});