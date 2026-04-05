const Person = require('../models/person')

exports.getAllPersons = (req, res, next) => {
  Person.find({})
    .then(persons => res.json(persons))
    .catch(error => next(error))
}

exports.getPersonById = (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) res.json(person)
      else res.status(404).end()
    })
    .catch(error => next(error))
}

exports.addPerson = (req, res, next) => {
  const { name, number } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  Person.findOne({ name }).then(existing => {
    if (existing) {
      existing.number = number
      return existing.save().then(updated => res.json(updated))
    }

    const person = new Person({ name, number })

    person.save()
      .then(saved => res.json(saved))
      .catch(error => next(error))
  })
}

exports.deletePerson = (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error))
}

exports.updatePerson = (req, res, next) => {
  const { name, number } = req.body

  Person.findByIdAndUpdate(
    req.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updated => res.json(updated))
    .catch(error => next(error))
}