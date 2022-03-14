import React from 'react'
import { useState } from 'react'
import Check from "../images/icon-check.svg"

export default function Task({text, task, tasks, setTasks}) {

  // Create a state variable to keep track of mutable todos 
  const [mutableTask, setMutableTask] = useState(task)

  const checked = mutableTask.status ? 'checked': ''; 
  const checkIcon = mutableTask.status ? (<img src = {Check} alt='completed'/>) : ''; 
  

  const markCompleted = () =>  {

  // What should happen when I click
  // Set status of the task to the opposite boolean 

  // This updates status on our Frontend 
  setMutableTask({...mutableTask, status: !mutableTask.status})

  // Update task to the new array of objects and their new statuses!
  //This will update the statuses in my Backend 
    // find the corresponding task from the map
    const updatedTasks = tasks.map((item) => {
     return task.id === item.id ? {...item, status : !item.status} : item
  })
    // find the corresponding item that matches task 
    // Ternary operator 
    setTasks(updatedTasks)
}


  return (
<div className='task_item'>
     <div className='check' onClick = {markCompleted}>
        <div className={`check_mark ${checked}`}>
          {checkIcon}
        </div>
    </div>
    <div className= {`task_text ${checked}`}> 
        <p> {text} </p>
    </div>
</div>
  )
}
