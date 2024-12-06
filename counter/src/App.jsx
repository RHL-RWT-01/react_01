import { useState } from 'react'

function App() {
  let [count,setCount]=useState(0);

  const increment=()=>{
    console.log("Value incremented",count);
    if(count<=15){
      setCount(count++)
    }
    
  }
  const decrement=()=>{
    console.log("Value decremented",count);
    console.log("Value incremented",count);
    if(count>=0){
      setCount(count--)
    }
  }

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button>
      <br/>
      <br/>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
