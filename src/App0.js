import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0);
  const [isHappy,setIsHappy]=useState("😊")
  const nev="Gyula"

  const piros={color:"red"}
  const zold={color:"green"}

  const handleMinus=() =>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }

  const handleHappy=()=>{
    console.log(isHappy)
    isHappy=="😊" ? setIsHappy("😢") : setIsHappy("😊")
  } 
  return (
    <div className="container">
      <h1>Első React Projekt</h1>
      <h4>Üdv {nev} 👌👌👌!</h4>
      <div style={counter<10 ? piros : zold}>Számláló: {counter}</div>
      <button className='btn btn-primary m-2' onClick={()=>setCounter(counter+1)}>+</button>
      <Button variant='danger' onClick={handleMinus}>-</Button>
      <p>{counter>=10 ? "😊" : "😢"}</p>
      <button onClick={handleHappy}>Kapcsoló</button>
      <div className='happy'>{isHappy}</div>
    </div>
  );
}

export default App;
