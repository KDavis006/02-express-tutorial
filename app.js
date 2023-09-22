const express = require('express');
const path = require('path');
const app = express();

/*setup static middleware
Middleware comes in the middle of the requests and response cycle of the node.js execution. It also provides access to many functions like request and response objects

// Response object is passed as the second parameter to the requestListener function. The response object represents the writeable stream back to the client
--write() sernds text or text stream to the client
--writeHead() sends status and response headers to the client
--end() Signals that the server should consider that the response is complete
--getHeader() Returns the value of the specific header
--setTimeout sets the timeout value of the socket to the specific value in miliseconds
--statusCode sets the status code that will be sent to the client

For the writeHead and the setStatusCode methods the following are acceptable:
100-199 Information Response
200-299 Successfull Response
300-399 Redirect response
400-499 Client Error
500-599 Server Error
You can find the detailed list @: 
https://developer.mozilla.org/en-US/docs/HTTP/Status

Request object is made by a client to a named host which is located on the server. The aim of the request is to access resources on the server.
A proper HTTP request contains the following:
-- A request line
-- A series of HTTP header(s)
-- A message body if needed

Request line: has 3 main aspects:
-- A method like GET,UPDATE, DELETE...etc tells the server what it should do with the resorce
-- The Path component identifies the resource on the werver 
-- The HTTP Version Number showing what specification to which the client has tried to make the message comply

HTTP Headers:
HTTP headers are written on a message to provide the recipient with information about the request, the sender and the way in which the sender wants to communicate with the server/recipient.
Ex. {'content-type': 'text/html'},
-host, user-agent...ect
*/


app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
 console.log(req.url)
 req.sendFile(path.resolve(__dirname, '/public/index.html'));
})

app.get('*', (req, res) => {
 res.status(404).send('Error 404 Not Found Idiot')
})

app.listen(5000, (req, res) => {
 console.log('Server listening on port: 5000')
})
