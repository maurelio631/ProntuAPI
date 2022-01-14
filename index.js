import express from "express";
import employeeRoutes from "./routes/employee.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/users", employeeRoutes);
app.use("/", (req, res) => {
    res.send("Seja bem vindo à api de cadastro de funcionarios do prontu");
});

