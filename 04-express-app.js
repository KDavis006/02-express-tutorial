const express = require('express'), path = require('path'), app = express();

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) =>{
 res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.get('/about', (req, res) =>{
 res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.all('*', (req, res) =>{
 res.status(404).send('resourse not found');
})

app.listen(5000, () => {
 console.log('listening on port 5000');
})