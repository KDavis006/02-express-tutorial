const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static("./public"))

/*
Parse form data
Built in middleware function in express that parses incoming requests. If you check req.body without it then you will see that the value is undefined.*/
app.use(express.urlencoded({extended: false}))

// parse  form data this works similarly to the url encoded but handels the json
app.use(express.json())

app.get('/api/people', (req, res) => {
 res.json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
 console.log(req.body)
 const { name } = req.body
 if(name) {
  res.status(200).json({success: true, person: name})
 }
 // If the new perosn does not have a name
  res.status(404).json({success: false, msg: "You suck!"}); 
})

// Above is for javascript.html
// Below is for index.html

app.post('/login', (req, res) => {
 console.log(req.body)
 const {name} = req.body
 if (name){
  res.status(200).json({status: 200, data: name})
 }
 res.send('please Provide Credentials')
})

/* Part 1: Above

the above part brings in the public folder from before and then handles the index and javascript versions. I placed the HS foir the form in a seperate js file in the pubic folder so we can see that load alongside the html. The /api/people can be tested by going to the URL, but the use is in the script.js where we call the data with async await

The get for the api/people is for our testing but then the post will be for the request form the script.js*/

// Testing Postman:

let length = people.length + 1;
app.post('/api/postman/people', (req, res) => {
  const {name} = req.body
  const object = {
    id: length++,
    name: name
  }
  if(!name) {
    return res.status(400).json({data:[], success: false, msg: 'Please enter a valid name'})
  }
  res.status(201).json({success: true, data: [...people, object]})
})


// Put request

app.put('/api/postman/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  const person = people.find((person) => person.id === Number(id))
  if(!person) {
    return express.json({success: false, data: []})
  }
  const newPeople = people.map((person) =>{
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(202).json({data: newPeople, success: true})
})

// Delete request

app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params
  const person = people.find((person) => person.id === Number(id))

  if(!person) {
    return res.status(404).json({success: false, msg: 'no matching id found'})
  }
  people = people.filter((person) => person.id !== Number(id))
  res.status(202).json({data: people, success: true})
})

// Server listener

app.listen(5000, () => {
  console.log("Server is listening on Port 5000")
})