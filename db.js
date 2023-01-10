const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//const uri ="mongodb+srv://Swapnilkore:swapnil@cluster0.nip2ss6.mongodb.net/mynotes-app?retryWrites=true&w=majority"
//const uri = "mongodb+srv://Swapnilkore:swapnil@cluster0.nip2ss6.mongodb.net/mynotes-app"
const uri = "mongodb://localhost:27017/mynote-app"
const connectDatabase = async() => {
  try {
    await mongoose.connect(uri,() => {
      console.log("Database connected successfully");
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
