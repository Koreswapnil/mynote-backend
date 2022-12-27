const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const uri = "mongodb+srv://Swapnil:Srk@1406@cluster0.nn0msbx.mongodb.net/mynotes-app?retryWrites=true&w=majority";

const connectDatabase = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('Database connected successfully')})
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDatabase;

