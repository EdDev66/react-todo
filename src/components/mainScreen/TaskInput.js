import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TaskContext from '../../context/Tasks/taskContext';


function TaskInput() {

  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;

  const [taskValue, setTaskValue] = useState('');

  const handleChange = (event) => {
    setTaskValue(event.target.value)
  }

  const handleClick = () => {
    if(taskValue !== '') {
      addTask({id: taskValue, task: taskValue, completed: false});
      setTaskValue('');
    }
  }

  return (
    <>
      <InputGroup size='lg' className="mb-4">
        <Form.Control
          value={taskValue}
          onChange={handleChange}
          placeholder="Add a task"
          aria-label="Add a task"
          aria-describedby="basic-addon2"
        />
        <Button 
          onClick={handleClick}
          variant="outline-info" 
          id="button-addon2"
        >
          Add
        </Button>
      </InputGroup>
    </>
  )
}

export default TaskInput