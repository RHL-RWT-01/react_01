import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Rahul</h1> */}
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
