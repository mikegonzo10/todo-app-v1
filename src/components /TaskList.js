import React from 'react'
import Task  from './Task'
import FilyerControl from './FilyerControl'

export default function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks}) {
    
clearCompleted = () => {
  // setFilterTasks(tasks.filter((task)=> task.status === true))
}
  return (
   /* Make A TASK LIST COMPONENT */

<div className='task_list_wrapper'>
    <div className='task_list'> 
       {/* Map through an array of todos and for every todo create a task componenet*/}
       {filteredTasks.map((task)=> {
          
          return <Task 
          text = {task.text}
          key = {task.id}
          status = {task.status}
          setTasks = {setTasks}
          task = {task}
          tasks = {tasks}
          />

        })}

    </div>
    
    < div className='task_items_info' >
         <div className='items_left' >
         5 items left
        </div>
        {/* Out FIlter Control compinent here */}
         <FilyerControl 
         filterStatus = {filterStatus} 
         setFilterStatus = {setFilterStatus} />

     <div className='items_clear'>
         <span onClick={clearCompleted}> 
                Clear Completed
         </span>

         </div>          
    </div>
</div>
  )
}
