import express from "express";
import usersRoutes from "./routes/users.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/users", usersRoutes);
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Prontu:prontudbaccesspswd@prontu.3cl2r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => console.log(err.message));
