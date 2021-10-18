import express from "express";
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/users", usersRoutes);
app.use("/", (req,res)=>{
    res.send("Seja bem vindo à api de cadastro de usuários prontu");
});
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port http://localhost:${PORT}`)))
.catch((err)=>console.log(err.message));

