import express from 'express';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Estamos funcionando");
})

app.use('/users', usersRoutes);


app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})