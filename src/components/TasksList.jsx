import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import { Button } from 'react-bootstrap'

const TasksList =() => {
    const [status , setStatus] = useState("ALL")
    const listTasks = useSelector((state)=> state.task.listTasks)
    console.log(listTasks)
  return (
    <div>
     <Button onClick={()=>setStatus("ALL")}>ALL</Button>
     <Button onClick={()=>setStatus("Done")}>Done</Button>
     <Button onClick={()=>setStatus("UnDone")}>UnDone</Button>
         {status === "Done" 
         ? listTasks
        .filter((el)=>el.isDone === true)
        .map((task)=> <Task key={task.id} task={task} />) 
        :status === "UnDone" 
        ? listTasks
        .filter((el) => el.isDone === false)
        .map((task) => <Task key={task.id} task={task} />)
        :listTasks.map((task) => <Task key={task.id} task={task} />)}
        
    </div>
  )
}

export default TasksList