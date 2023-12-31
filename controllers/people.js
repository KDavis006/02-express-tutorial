let {people} = require('../data')

// Gets all the people
const readPeople = (req, res) => {
 res.json({success: true, data: people})
}

let length = people.length+1 
// Post function for creating a new person
const createPeople = (req, res) => {
 const {name} = req.body

  if(!name) {
    return res.status(400).json({data:[], success: false, msg: 'Please enter a valid name'})
  }
    const person = {
    id: length++,
    name: name
  }
  people.push(person)
  res.status(201).json({success: true, data: [people]})
}

// Put function

const updatePeople = (req, res) => {
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
}

// Delete people

const deletePeople = (req, res) => {
 const {id} = req.params
 const person = people.find((person) => person.id === Number(id))

 if(!person) {
   return res.status(404).json({success: false, msg: 'no matching id found'})
 }
 people = people.filter((person) => person.id !== Number(id))
 res.status(202).json({data: people, success: true})
}

module.exports = {createPeople, readPeople, updatePeople, deletePeople}