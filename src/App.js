import './App.css';
import TaskInput from './components /TaskInput';
import TaskList from './components /TaskList';
import { useState, useEffect } from 'react'

/*
  Part 1:
- Finish up minor css
- Create a data array of objects (todos)
- Create a state that holds that tasks data
- Pass that data to Tasklist and map through to create Task component for each task
- Destrcture props and make Task dynamic


Part 2:
- Pass tasks and setTasks state to TaskInput
- Create input state
- Set up handleChange function to update input state
- set value of input to input
- Create handleForm function to create new Task
- Create an new task object and how would you add that to the array of tasks?
*/

const data = [
  { id: 1, text: "Eat Breakfeast", status: false },
  { id: 2, text: "1 hour trading chart time", status: false },
  { id: 3, text: "Finish Clever Programmer Videos", status: false },
  { id: 4, text: "Gym 1 Hour", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {

  // What do I want to keep track of?
  
  const [tasks, setTasks] = useState(data); 
  const [filteredTasks, setFilteredTasks]= useState(tasks)
  const [filterStatus, setFilterStatus] = useState('All') 

  //useEffect is a react hook that let use proform 'side effect' at ANT stage of the component life cycle 
  // 'Side Effect" = API Call, adding event listener, a function that I want to run 
  

  useEffect(()=> {
    // WHen I change my filterStatus I want to update my tasks to the corresponding filterStatus
    
    const handleFilter = () => {
      if (filterStatus === 'active') {
        //How do I update my tasks with only the 'active task
        // Get an array filtered with only the active tasks 
        setFilteredTasks(tasks.filter((task)=> task.status === false))
      } else if (filterStatus === 'completed') {
        //What should I update tasks to? 
        setFilteredTasks(tasks.filter((task)=> task.status === true))

      } else {
        setFilteredTasks(tasks)
      } 
  }
  handleFilter()
},[filterStatus])
  // same as  Let tasks = []
  // setTasks(data)  // same as tasks - data

  
  //Component Life Cycle 
  // componentWillMount (when the component first renders)
  // componentDidUpdate (when it rerenders)
  // component WillUnmount (when the component is removed from the app)


  return (
<div className="App">    
    <div className='container'>
      <div className='header'>
          <h1> TODO </h1>
          <img src ='./images/icon-sun.svg' alt='sun'/> 
      </div>
        
        {/* ADD A TASK INPUT COMPONENT */}
        <TaskInput 
        tasks = {tasks} 
        setTasks = {setTasks} />   

        {/* Make A TASK LIST COMPONENT*/}
        <TaskList 
        tasks = {tasks} 
        setTasks = {setTasks} 
        filterStatus = {filterStatus} 
        setFilterStatus = {setFilterStatus}
        filteredTasks = {filteredTasks} />
     </div>
</div>
  );
}

export default App;

  
