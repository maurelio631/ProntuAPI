import { v4 as uuidv4 } from "uuid";

export const getUsers = (req, res) => {
  console.log(users);

  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User ${user.name} added successfully`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User id ${id} deleted successfully`);
};

export const updateUser = (req, res) => {
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
};
