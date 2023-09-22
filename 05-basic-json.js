const express = require('express'), app = express();

const {products} = require('./data')

app.get('/', (req, res) => {
 res.json(products)
}).listen(5000, () => {
 console.log('listening on port 5000')
})