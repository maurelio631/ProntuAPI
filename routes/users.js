import express from "express";
import { v4 as uuidv4 } from "uuid";
import { getUsers, createUser, getUser } from "../controllers/users.js";

const router = express.Router();
let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User id ${id} deleted successfully`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((user) => user.id == id);

  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
  res.send(`User with the id ${id} has been updated`);
});
export default router;
