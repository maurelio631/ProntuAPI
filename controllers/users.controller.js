import express from "express";
import User from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    return res.status(404).send({ err: "User not found" });
  }
};

export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
  } catch (error) {}
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    return res.status(409).json({ error: "Registration failed" });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User id ${id} deleted successfully`);
  } catch (error) {}
};

export const updateUser = (req, res) => {
  try {
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
  } catch (error) {}
};
