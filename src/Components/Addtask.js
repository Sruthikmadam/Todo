import React from 'react';
import { useState } from 'react';


const Addtask = ({addTask}) => {
    const [value,setValue]=useState("");
    const addItem=()=>{
        addTask(value);
        setValue("");
        // console.log(value)
    };
  return (
    <div className='input-container'>
        <input type="text" className='input'
         placeholder='Add a new task'
         value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        />

        <button  onClick={addItem}className='add-btn'>Add</button>
    </div>
  )
}

export default Addtask