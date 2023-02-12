import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TaskContext from '../../context/Tasks/taskContext';
import TaskPriority from './TaskPriority';
import Alert from 'react-bootstrap/Alert';


function TaskInput() {

  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;

  const [taskValue, setTaskValue] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [priority, setPriority] = useState('');
  const [priorityVisible, setPriorityVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);



  const handleChange = (event) => {
    setTaskValue(event.target.value)
  }

  const priorityHandler = (val) => {
    setPriority(val);
  }

  const handleAlert = () => {
    setShowAlert(true)
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 3000);

    return () => clearTimeout(timer)
  } 

  const handleClick = () => {
    if(taskValue !== '' && priority !== '' && taskDate !== '') {
      addTask({id: taskValue, task: taskValue, completed: false, priority, dueDate: taskDate});
      setTaskValue('');
      setPriority('')
      setPriorityVisible(false);
    } else {
      handleAlert();
    }
  }

  const clickHandler = () => {
    setPriorityVisible(true)
  }

  const handleDateChange = (e) => {
    setTaskDate(e.target.value)
  }

  return (
    <>
    {showAlert ? <Alert variant='danger'>Please complete all fields!</Alert> : ''}
      <InputGroup size='lg' className="mb-2">
        <Form.Control
          value={taskValue}
          onChange={handleChange}
          onClick={clickHandler}
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
      <Form.Label>Task due date</Form.Label>
      <Form.Control
        type='date'
        className={`mb-3 ${priorityVisible ? 'd-flex' : 'd-none'}`}
        onChange={handleDateChange}>
      </Form.Control>
      <TaskPriority 
        handlePriority={priorityHandler} 
        visible={priorityVisible}
      />
    </>
  )
}

export default TaskInput