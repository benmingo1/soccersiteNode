var express = require('express')

var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.sendfile(__dirname +'/views/index.html');
})

app.get('/about', function(req, res){
  res.send('this is the about page');
})

app.get('/roster', function(req, res){
  res.sendfile(__dirname +'/views/roster.html')
})

app.get('/contact', function(req, res){
  res.send('this is the conact page');
})

app.use(express.static('public'));

app.listen(3000);
