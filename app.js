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

var videos = [
	{	link:"https://player.vimeo.com/video/129634826",
		image: "../images/newbbg.jpg",
		info: "something something",
		id: 1,
		active: true},
	{	link:"https://player.vimeo.com/video/121019035",
		image: "../images/G_og_W2.png",
		info: "something else",
		id: 2,
		active: false},
	{	link:"https://player.vimeo.com/video/132457056",
		image: "../images/green_bubbles.jpg",
		info: "Some Some Some",
		id: 3,
		active: false}
		]

app.get('/',function(request,response){
	response.render("video",{data: videos})
})

app.get('/blog',function(request,response){
	response.render("blog")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

