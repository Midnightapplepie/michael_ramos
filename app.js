var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var req = require('request');
var fs = require('fs');

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
	response.render("home")
})

app.get('/videos',function(request,response){
	var url = "http://vimeo.com/api/v2/michaelramos/videos.json";
	var body_data;
	
	req(url, function(err, resp, body){
		body_data = JSON.parse(body);
		body_data[0]["active"]= true;
		console.log(Array.isArray(body_data));
		console.log(body_data);
		response.render("video",{data: body_data})
	})	

})

app.get('/blog',function(request,response){
	response.render("blog")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

