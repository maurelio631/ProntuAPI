const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ProntuAPI', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
