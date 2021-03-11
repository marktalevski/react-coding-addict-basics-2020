import React, {useState, useRef, useEffect} from 'react'
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {

  const [todos, setTodos] = useState([{
    id: uuidv4(),
    name: 'Todo 1',
    complete: false
  }])

  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, ]
    })
    todoNameRef.current.value = null
  }

  return(
    <>
      <TodoList todos={todos}/>
      <input 
        ref={todoNameRef}
        type='text' 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 Todos completed</div>
    </>
  )
}