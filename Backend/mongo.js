// so now here we have to check for the data addition to our mongo db 
const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:ashok2678@cluster0.d44br.mongodb.net/myTodo?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(async() =>{
    console.log("connected to mogo succesfully");
  })
  .catch((err) => console.error("mongo db connection error", err.message));

const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completed : Boolean
});

const todo = mongoose.model('todos' , todoSchema);
// exporting the todo 
module.exports = todo;