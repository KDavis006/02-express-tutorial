let {tasks} = require('../data')

// Gets all the people
const readPeople = (req, res) => {
 res.json({success: true, data: tasks})
}

let length = tasks.length+1 
// Post function for creating a new person
const createPeople = (req, res) => {
 const {name, description} = req.body

  if(!name) {
    return res.status(400).json({data:[], success: false, msg: 'Please enter a valid name'})
  }
    const person = {
    id: length++,
    name: name,
    description: description,
    done: false,
  }
  tasks.push(person)
  res.status(201).json({success: true, data: [tasks]})
}

// Put function

const updatePeople = (req, res) => {
 const {id} = req.params
  const {name, done, description} = req.body
  const person = tasks.find((person) => person.id === Number(id))
  
  if(!person) {
    return express.json({success: false, data: []})
  }
  const newPeople = tasks.map((person) =>{
    if (person.id === Number(id)) {
      person.name = name
      person.done = done
      person.description = description
    }
    return person
  })
  res.status(202).json({data: newPeople, success: true})
}

// Delete people

const deletePeople = (req, res) => {
 const {id} = req.params
 const person = tasks.find((person) => person.id === Number(id))

 if(!person) {
   return res.status(404).json({success: false, msg: 'no matching id found'})
 }
 tasks = tasks.filter((person) => person.id !== Number(id))
 res.status(202).json({data: tasks, success: true})
}

module.exports = {createPeople, readPeople, updatePeople, deletePeople}