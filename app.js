//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const homeStartingContent = 'This is a blog post.';
const aboutContent = 'My info.';
const contactContent = 'Contact info.';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', { newText: homeStartingContent });
});

app.get('/about', function(req, res) {
  res.render('about', { about: aboutContent });
});

app.get('/contact', function(req, res) {
  res.render('contact', { contact: contactContent });
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
