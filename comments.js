// create web server
const express = require('express');
const app = express();
const port = 5000;

// import comments data
const comments = require('./data/comments');

// import products data
const products = require('./data/products');

// import reviews data
const reviews = require('./data/reviews');

// import path module
const path = require('path');

// import ejs
const ejs = require('ejs');

// set view engine to ejs
app.set('view engine', 'ejs');

// set path to views folder
app.set('views', path.join(__dirname, 'views'));

// set path to public folder
app.use(express.static(path.join(__dirname, 'public')));

// render index page
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Home',
    products: products.getAllProducts()
  });
});

// render about page
app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About'
  });
});

// render products page
app.get('/products', (req, res) => {
  res.render('pages/products', {
    title: 'Products',
    products: products.getAllProducts()
  });
});

// render product page
app.get('/product/:id', (req, res) => {
  res.render('pages/product', {
    title: 'Product',
    product: products.getProduct(req.params.id),
    reviews: reviews.getReviewsByProductId(req.params.id)
  });
});

// render comments page
app.get('/comments', (req, res) => {
  res.render('pages/comments', {
    title: 'Comments',
    comments: comments.getAllComments()
  });
});

// render comment page
app.get('/comment/:id', (req, res) => {
  res.render('pages/comment', {
    title: 'Comment',
    comment: comments.getComment(req.params.id)
  });
});

// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

