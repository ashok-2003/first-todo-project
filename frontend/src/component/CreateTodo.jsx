// so now notice here that it should start with capitial lettter for the jsx file 

import { useState } from "react"



export function CreateTodo(){
    // this function should be under the scope here 
    const[title , Settitle] = useState("");
    const[description , Setdescription] = useState("");
    // so now here we will take the input form the user here 
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            Settitle(e.target.value);
        }}/> <br></br> 
        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            Setdescription(e.target.value);
        }}/> <br></br>

        <button onClick={() =>{
            fetch("http://localhost:3000/todo",{
                method : "POST",
                body: JSON.stringify({
                    title : title,
                    description : description
                }),
                headers: {
                    "Content-Type": "application/json",
                }
                  
            })
            .then(async (res) => {
                if (!res.ok) throw new Error("Failed to add todo");
                const json = await res.json();
                alert("Todo added successfully!");
            });
              
        }}>Add a Todo</button>
    </div>
}




// this is chat gpt solution of it


// import { useState } from 'react';

// export function CreateTodo() {
//   const [title, setTitle] = useState(""); // State to store title
//   const [description, setDescription] = useState(""); // State to store description
//   const [error, setError] = useState(null); // State for error feedback
//   const [success, setSuccess] = useState(false); // State for success feedback

//   const handleSubmit = async () => {
//     setError(null); // Reset error state
//     setSuccess(false); // Reset success state

//     if (!title || !description) {
//       setError("Both fields are required!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/todo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           description,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create todo");
//       }

//       setSuccess(true); // Show success feedback
//       setTitle(""); // Clear title
//       setDescription(""); // Clear description
//     } catch (err) {
//       setError(err.message); // Show error feedback
//     }
//   };

//   return (
//     <div>
//       <h2>Create a New Todo</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)} // Update title state
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)} // Update description state
//       />
//       <br />
//       <button onClick={handleSubmit}>Add a Todo</button>
//       {success && <p style={{ color: "green" }}>Todo created successfully!</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//     </div>
//   );
// }
