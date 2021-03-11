import React, {useState} from 'react'
import TodoList from './TodoList'

function App() {

  const [todos, setTodos] = useState([])

  return(
    <>
      <TodoList todos={todos}/>
      <input type='text'></input>
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 Todos completed</div>
    </>
  )
}

export default App;
