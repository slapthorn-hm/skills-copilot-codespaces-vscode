// Create web server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install mongoose
// 4. npm install cors

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// import the comment model
const Comment = require('./models/comment');

// create express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/comments');
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

// enable CORS
app.use(cors());

// use body-parser middleware
app.use(bodyParser.json());

// create routes
app.get('/', function(req, res){
    res.send('Hello from server');
});

// get all comments from database
app.get('/comments', function(req, res){
    Comment.find({}).then(function(comments){
        res.send(comments);
    });
});

// add a new comment to database
app.post('/comments', function(req, res){
    Comment.create(req.body).then(function(comment){
        res.send(comment);
    });
});

// edit an existing comment in database
app.put('/comments/:id', function(req, res){
    Comment.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Comment.findOne({_id: req.params.id}).then(function(comment){
            res.send(comment);
        });
    });
});

// delete an existing comment from database
app.delete('/comments/:id', function(req, res){
    Comment.findByIdAndRemove({_id: req.params.id}).then(function(comment){
        res.send(comment);
    });
});

// listen for requests
app.listen(3000, function(){
    console.log('Now listening for requests on port 3000');
});