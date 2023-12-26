import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/taskActions';

const AddTask = () => {
    const dispatch = useDispatch();
    const [text , setText] = useState("");

    const handleAddTask =(e) => {
        e.preventDefault();
        if (! text) {
            alert("You Can't Add An Task !!")
        }else{
            dispatch(addTask({id:Math.random() , Text:text , isDone : false}))
        }
    }
  return (
    <Form onSubmitCapture={handleAddTask}>
    <Form.Group className="mb-3">
    <Form.Label>Add Task</Form.Label>
    <Form.Control type="text" placeholder="Enter Task ..." value={text} name='text' onChange={(e)=> setText(e.target.value)} />
  </Form.Group>
  <Button variant="success" type="submit">
    ADD TASK
  </Button>
</Form>
  )
}

export default AddTask