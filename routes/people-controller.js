const express = require('express'), router = express.Router(), {createPeople, readPeople, updatePeople, deletePeople} = require('../controllers/people')

router.get('/', readPeople).post('/',createPeople).put('/:id', updatePeople).delete('/:id', deletePeople);

module.exports = router;