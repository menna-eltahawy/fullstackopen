const express = require('express')
const router = express.Router()
const personController = require('../controllers/personController')

router.get('/persons', personController.getAllPersons)
router.get('/persons/:id', personController.getPersonById)
router.post('/persons', personController.addPerson)
router.delete('/persons/:id', personController.deletePerson)
router.put('/persons/:id', personController.updatePerson)

module.exports = router