import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  //let counter = 5;

  const addValue = ()=>{
    setCounter(counter+1)
  //  console.log("value Added", (Math.random()*10)/1);
  
}
  const subtractValue = ()=>{
    if(counter >0){
    setCounter(counter-1)
    }
    else{
      setCounter(0);
    }
   // console.log("value subtract", (Math.random()*10)/1);
  }

  return (
    <>
     <h1>Chay aur React</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}
     >Add value</button>
     <br />
     <button onClick={subtractValue}
     >Remove value</button>
    </>
  )
}

export default App
