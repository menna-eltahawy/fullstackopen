import express from "express";
import mongoose from "mongoose";
import router from "./routes/users.js";

const app = express();
const port = 3000;

const uri = "mongodb://127.0.0.1:27017/mongo";

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api", router);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});