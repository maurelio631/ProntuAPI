import express from "express";
import { v4 as uuidv4 } from "uuid";

const Employees = [];
export const getEmployees = async (req, res) => {
  try {
    console.log(employees);
    res.status(200).json(employees);
  } catch (err) {
    return res.status(404).send({ err: "Employee not found" });
  }
};

export const getEmployee = (req, res) => {
  try {
    const { id } = req.params;
    const foundEmployee = employees.find((employee) => employee.id === id);
    res.send(foundEmployee);
  } catch (error) {}
};

export const createEmployee = async (req, res) => {
  const employee = req.body;
  const newEmployee = new Employee(employee);
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    return res.status(409).json({ error: "Registration failed" });
  }
};

export const deleteEmployee = (req, res) => {
  try {
    const { id } = req.params;

    employees = employees.filter((employee) => employee.id != id);

    res.send(`Employee id ${id} deleted successfully`);
  } catch (error) {}
};

export const updateEmployee = (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, employeeType } = req.body;
    const employee = employees.find((employee) => employee.id == id);

    if (name) {
      employee.name = name;
    }
    if (phone) {
      employee.phone = phone;
    }
    if (email) {
      employee.email = email;
    }
    if (employeeType) {
      employee.employeeType = employeeType;
    }
    res.send(`Employee with the id ${id} has been updated`);
  } catch (error) {}
};
