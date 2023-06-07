// import useState to use it
import { useState } from 'react';

// main component function
export default function App(){
  return(
    <div className="App">
      <MyButton />
      <MyButton />
    </div>
  )
}

// button handler function
function MyButton(){
  const [count, setCount] = useState(0);
  // increament state on event
  function handleClick(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Clicked {count} times!</button>
  )
}
