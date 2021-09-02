const mongoose = require('../databases/index.js');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    }, 
    phoneNumber:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,

    },
    employeeType:{
        type:String,
        required:true,
    },
    password:{
        type: String,
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

const User = mongoose.Model('User', userSchema);
module.exports = User;