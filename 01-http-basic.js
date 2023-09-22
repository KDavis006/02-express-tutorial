const  http  = require('http'),  path  = require('path'), listen = 5000, contentlisten = `listening on server: ${listen}`,writehead = (200, {'content-type': 'text/html'}),  writehome  = '<h1>Home Page of Kyle</h1>', writeabout = '<h1>About Page of Kyle</h1>', writeerror = '<h1>Error 404</h1>', server = http.createServer((req, res) => {
 console.log(req.method)
 const url = req.url
 // home page
 if(url == '/') {
  res.writeHead(writehead)
  res.write(writehome)
  res.end()
 }
 // about page
 else if(url == '/about') {
  res.writeHead(writehead)
  res.write(writeabout)
  res.end()
 }
 // 404
 else{
  res.writeHead(writehead)
  res.write(writeerror)
  res.end()
 }
}).listen(listen, () =>
console.log(contentlisten)
)