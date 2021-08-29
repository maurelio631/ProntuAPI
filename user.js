const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let users = [];

app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/user', (req, res)=>{
    const user = req.body;

    console.log(user);
    users.push(user);

    res.send('User added successfully');
});

app.listen(port, ()=>console.log(`App listeling on port ${port}`))