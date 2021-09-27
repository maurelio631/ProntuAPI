const mongodb = require('mongodb').MongoClient;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Prontu:<Prontumongo>@prontu.3cl2r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Conectado");
});

module.exports = {}; 




