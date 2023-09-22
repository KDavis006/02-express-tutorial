const express = require('express'), app = express();
let num = 0

app.get("/", (req, res) => {
 num++
 console.log('User Number: ', num)
 res.status(200).send('Home page found')
})

app.get("/about", (req, res) => {
 res.status(200).send('About page found')
})

app.all('*', (req, res) => {
 res.status(404).send('<h1>Error 404</h1>')
})

app.listen(5000, () => {
 console.log('listening on port: http://localhost:5000')
})