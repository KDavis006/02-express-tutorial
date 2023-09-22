// HTTP App Template
const {http} = require('http'), {path} = require('path'), {readFileSync} = require('fs');

// get All Files

const { homePage} = readFileSync(path.join(__dirname, '/public/index.html')), { homeStyles} = readFileSync(path.join(__dirname, '/public/styles.css')), { homeImage} = readFileSync(path.join(__dirname, '/public/logo.svg')), { homeLogic} = readFileSync(path.join(__dirname, '/public/browser_app.js'));

const server = http.createServer((req, res) => {
 const url = req.url
 console.log(url)
 // home page
 if(url == '/') {
  res.writeHead(200, {'content-type': 'text/html'})
  res.write(homePage)
  res.end()
 }
 // styles
 else if(url == '/styles.css') {
  res.writeHead(200, {'content-type': 'text/html'})
  res.write(homeStyles)
  res.end()
 }
 // images logo
 else if(url == '/logo.svg') {
  res.writeHead(200, {'content-type': 'image/svg+xml'})
  res.write(homeImage)
  res.end()
 }
 // logic
 else if(url == '/browser_app.js') {
  res.writeHead(200, {'content-type': 'text/javascript'})
  res.write(homeLogic)
  res.end()
 }
 // 404
 else{
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1>Error 404</h1>')
  res.end()
 }
}).listen(5000, () =>
console.log('Listening on server: ' + 5000)
)