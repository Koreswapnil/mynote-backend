const mongoose = require('mongoose')

const User = new mongoose.Schema({
    "email": String,
    "password": String,
    "name": String
})


module.exports = mongoose.model('users', User)









// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
// name :{
//     type : String,
//     require : true
// },
// email :{
//     type : String,
//     require : true,
//     unique :true
// },
// passward :{
//     type : String,
//     require : true
// },
// date :{
//     type : Date,
//     default : Date.now
// }
// });

// module.exports = mongoose.module('user', userSchema);