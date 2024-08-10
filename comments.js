// create a web server that listens on port 3000
// create a route that listens for POST requests to /comments
// when a POST request is made, parse the incoming form data and log it to the console
// test your server using curl or Postman

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Thanks for your comments!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// curl -X POST -d "name=John&comment=Hello" http://localhost:3000/comments
// { name: 'John', comment: 'Hello' }
// Thanks for your comments!

// curl -X POST -d "name=Jane&comment=Hi" http://localhost:3000/comments
// { name: 'Jane', comment: 'Hi' }
// Thanks for your comments!