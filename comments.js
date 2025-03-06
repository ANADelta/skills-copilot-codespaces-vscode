// Create web server
// Define routes
// Start the server

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.status(201).json(comment);
});

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});