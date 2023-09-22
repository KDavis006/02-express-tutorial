const express = require('express');
const app = express();
const logger = require("./middleware/logger");
const authorize = require('./middleware/authorize');

/*
req => middleware = > response
order matters if you place the app.use after the home get, then it wont run on the home get since the response will end before it got there
// app.use(logger)

if you have several middleware then you can call them in an array where again order matters
*/

app.get('/', (req, res) =>  {
 res.send('Home');
})

app.get('/about', (req, res) => {
 res.send('About');
})

app.use('/api', [logger, authorize])
/* this will apply the logger and any path that includes api as a port of its path
this is a nice way for you to run logger on an api to stop a certain amount of requests but still allow them on the home doccumentation */

app.get('/api/products', (req, res) => {
 res.send('Products')
})

app.get('/api/items', (req, res) => {
 console.log(res.user)
 res.send('Items')
})

app.listen(5000, (req, res) => {
 console.log('listening on server: 5000');
})