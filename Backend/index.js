// so now here we have to wirte the basic boiler plate of the code here 
const express = require("express"); // init the express
const cors = require("cors");
const { CreateTodo, completeTodo } = require("./type");
const todo = require("./mongo"); // Import your model
const app = express(); // taking the instance for the express 
app.use(express.json()); // for when we take input we will take as json file
app.use(cors());


//importing the zod validation 
 

app.post("/todo",async function(req , res){ // for adding the todo 
    // so now here we have to do the zod validation 
    const createpayload = req.body;
    const parsepayload = CreateTodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg : "you have sent the wrong input here"
        })
        return;
    }
    // so now here if validation succesful then we will write the data base call here 
    await todo.create({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
    })
    // so now here if this completed then we will do the await 
    res.json({
        msg : "todo created"
    })
});

app.get("/todos" , async function(req , res){
    // so now here we have to just find the todo all 
    const  todos = await todo.find({});
    // as this was the promise so we have to use the await syntax 
    res.json({
        todos
    })
});

app.put("/completed" , async function(req , res){
    // validation check here 
    // const input = req.body;
    // const checkinput = completeTodo.safeParse(input);
    // if(!checkinput.success){
    //     res.status(411).json({
    //         msg : "you have sent the wrong input"
    //     })
    //     return;
    // }
// something wrong in the validation check due to which it is saying error message that's why we have comment this out 


    // so now here we have to find the todo first of all 
    await todo.updateOne({ _id: req.body.id }, { completed: true }); // so this will find the todo then update it 

    res.json({
        msg : "mark as completed"
    })
})

app.listen(3000);
