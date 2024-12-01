// // so now here we will get the todo as the array so now we have to reperesent all 

export function Todos({ todos }) { // Destructure the todos prop
  // so now here we will write out function here 
  async function completehandle(todoid) {
    const response = await fetch("http://localhost:3000/completed", {
      method : "PUT",
      body : JSON.stringify({id : todoid}),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(async (res) => {
      if (!res.ok) throw new Error("Failed to mark completed");
      const json = await res.json();
      alert("marked as completed");
  });
  }
    return (
      <div>
        {todos.map(function(todo, index) { // Map through the todos array
          return (
            <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={() => completehandle(todo._id)} >
                {todo.completed === true ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  

// chat gpt response 

// import { useState } from "react";

// export function Todos({ todos }) {
//   const handleComplete = async (todoId) => {
//     try {
//       // Sending PUT request to mark the todo as completed
//       const response = await fetch("http://localhost:3000/completed", {
//         method: "PUT",
//         body: JSON.stringify({ id: todoId }), // Send the todo's ID
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Todo marked as completed!");
//         // Optionally, you can update the state to reflect the change
//         // You might want to update the `todos` array to reflect the completed status.
//       } else {
//         alert("Error: " + data.msg);
//       }
//     } catch (error) {
//       alert("Error while updating todo: " + error.message);
//     }
//   };

//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <div key={index}>
//           <h1>{todo.title}</h1>
//           <h2>{todo.description}</h2>
//           <button onClick={() => handleComplete(todo._id)}>
//             {todo.completed ? "Completed" : "Mark as Completed"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
