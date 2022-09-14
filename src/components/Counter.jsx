import React,{useState} from 'react'

export const Counter=()=> {
    const [counter,setCounter]=useState(0)
  return (
    <div>
        <i className="fa-regular fa-square-plus fa-3x text-success"></i>
        <div>A számláló értéke: {counter}</div>
        <i className="fa-regular fa-square-minus fa-3x text-danger"></i>
    </div>
    )
  }