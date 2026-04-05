const { persons } = require("../models/person");

// GET all
exports.getAllPersons = (req, res) => {
  res.json(persons);
};

// GET by id
exports.getPersonById = (req, res) => {
  const person = persons.find(p => p.id === req.params.id);

  if (!person) {
    return res.status(404).json({ error: "not found" });
  }

  res.json(person);
};

// DELETE
exports.deletePerson = (req, res) => {
  const index = persons.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "not found" });
  }

  persons.splice(index, 1);
  res.status(204).end();
};

// POST
exports.addPerson = (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: "name or number missing" });
  }

  const exists = persons.find(p => p.name === name);

  if (exists) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 10000).toString(),
    name,
    number
  };

  persons.push(newPerson);
  res.status(201).json(newPerson);
};