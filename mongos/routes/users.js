import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deletedUserById,
} from "../controllers/users.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deletedUserById);

export default router;