import express from "express";
import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = async (req, res) => {
  console.log(users);
  try {
    res.send(users);
  } catch(err) {
    return res.status(404).send({err:"User not found"})
  }
};

export const createUser = (req, res) => {
  try {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    user.password = undefined;
    res.send(`User ${user.name} added successfully`);
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
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
  const { name, phone, email, employeeType } = req.body;
  const user = users.find((user) => user.id == id);

  if (name) {
    user.name = name;
  }
  if (phone) {
    user.phone = phone;
  }
  if (email) {
    user.email = email;
  }
  if (employeeType) {
    user.employeeType = employeeType;
  }
  res.send(`User with the id ${id} has been updated`);
};
