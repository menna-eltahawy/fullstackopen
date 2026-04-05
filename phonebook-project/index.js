const express = require("express");
const app = express();

const personRoutes = require("./routes/personRoutes");

app.use(express.json());

app.use("/api", personRoutes);

// info route
const { persons } = require("./models/person");

app.get("/info", (req, res) => {
  const date = new Date();

  res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
  `);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});