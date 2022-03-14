import React from 'react'
import { useState } from 'react'

// How do I add a new Todo item to my list?
// Take whatever I typed in 


// How do I keep track of what I type in my input  

// Everytime I make a change to the input I want to update my input state to the input value 

// and push in to the list 



export default function TaskInput({tasks, setTasks}) {

  const [input, setInput]= useState('')
  console.log(tasks)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleForm = (e) =>{
    e.preventDefault()
   

  const generateId = (array) => {
    // This variable should hold an array of all IDs
    const taskIDs = array.map ((item) => item.id)
    return Math.max(...taskIDs) + 1
  }
    // Create a new todo object 
    const newTask = {
      id: generateId(tasks),      
      text: input,
      status: false,
    }
    // How do I add a new task to the list  
    setTasks([newTask, ...tasks])
  }

  return (
<div className='task_input'>      
    <div className = 'check'>   
         <div className='check_mark'>
           {/* insert image here */}
         </div>
    </div>
    <div className='new_todo_input'> 
        <form onSubmit={handleForm}>
        <input onChange={handleChange} id = 'todo_input' type = 'text' placeholder= 'Create a new todo...'/>      
         </form>
    </div>
</div>
  )
}
