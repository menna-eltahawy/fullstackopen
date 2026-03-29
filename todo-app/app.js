const express = require("express");
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

app.use("/api", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});