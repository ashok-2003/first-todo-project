import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'

function App() {
  const [todos , SetTodo] = useState([]); // so this so that react will look at this here 

  // so now fetching the data from the backend here 
  fetch("http://localhost:3000/todos")  // so now this will wrok when my backend is up only then it wroks here   
    .then(async function (res) {
      const json = await res.json();
      SetTodo(json.todos);
    });

  return (
      <div>
        <CreateTodo/>
        <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
