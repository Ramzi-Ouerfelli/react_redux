import React from 'react'
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../JS/actions/taskActions';
import { doneTask } from '../JS/actions/taskActions';


const Task = ({task}) => {
    const dispatch = useDispatch();
    const handleDelete =() =>{
        dispatch(deleteTask(task.id))
    }
    const handleDone =()=> {
        dispatch(doneTask(task.id))
    }
  return (
    <div>
        <Card>
      <Card.Body><span> {task.Text} </span> <Edit task={task} /><Button onClick={handleDone} variant="info">{task.isDone ? "UNDone" : "Done"}</Button><Button onClick={handleDelete} variant='danger'>delete</Button ></Card.Body>
    </Card>
    </div>
  )
}

export default Task