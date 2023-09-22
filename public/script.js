const result = document.querySelector(".result");

const fetchPeople = async() => {
 try {
  const { data } = await axios.get('/api/people')
  console.log(data)
  const people = data.data.map((person) => {
   return `<h5>${person.name}</h5><button type="button" class="btn delete-btn" id=${person.id} onclick="remove(${person.id})">Delete</button><button type="button" class="btn edit-btn" onclick="editName('${person.name}',${person.id})">Edit</button>`
  })
  result.innerHTML = people.join("")
 } catch (error) {
  formAlert.textContent = error.response.data.msg
 }
}
fetchPeople()

// HTML
const btn = document.querySelector('.submit-btn')
const input = document.querySelector('.form-input')
const formAlert = document.querySelector('.form-alert')

function remove(id) {
    fetch(`/api/people/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  fetchPeople()
}

 let editmode = false
 let currentId = '';

function editName(name, id) {
  editmode = true
  input.value = name
  currentId = id;
}

btn.addEventListener('click', async(e) => {
 e.preventDefault()
 const nameValue = input.value

 try{
  if(!editmode){
  const { data } = await axios.post('/api/people', {name: nameValue})
  const h5 = document.createElement('h5')
  h5.textContent = data.person
  result.appendChild(h5)
  fetchPeople()
  } else {
    fetch(`/api/people/${currentId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: nameValue})
    })
    fetchPeople()
    editmode = false
  }
 } catch(error) {
  console.log(error)
 }
 input.value = ''
})