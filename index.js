import express from "express";
import usersRoutes from "./routes/users.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.js";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use("/users", usersRoutes);
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

