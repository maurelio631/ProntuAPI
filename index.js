import express from "express";
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.routes.js";
import { MongoClient } from "mongodb";
const app = express();


app.use("/users", usersRoutes);
app.use("/", (req, res) => {
    res.send("Seja bem vindo à api de cadastro de usuários prontu");
});
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

