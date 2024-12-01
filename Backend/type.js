// here we will use the all zod validation here 
const zod = require("zod");

// so now here for creating the todo the validation will be like 
const CreateTodo = zod.object({
    title : zod.string(),
    description : zod.string()
}); // so this will validate if we can add todo or not 

const completeTodo  = zod.object({
    todoId : zod.string()
});

// so now for exporting we have to write the export 
module.exports = {
    CreateTodo : CreateTodo,
    completeTodo : completeTodo
}