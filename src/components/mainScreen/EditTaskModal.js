import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TaskContext from '../../context/Tasks/taskContext';

function EditTaskModal(props) {
  const [taskValue, setTaskValue] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState('');

  const taskContext = useContext(TaskContext)
  const { activeTask, editTask } = taskContext;

  useEffect(() => {
      setTaskValue(activeTask.task)
      setDate(activeTask.dueDate)
      setPriority(activeTask.priority)
  }, [props.show, activeTask])

  const handleChange = (event) => {
    setTaskValue(event.target.value)
  }

  const handleOptionChange = (e) => {
    setPriority(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const updateHandler = () => {
    if(priority !== '' && taskValue !== '' && date !== '') {
      editTask({ ...activeTask, priority, dueDate: date, task: taskValue })
      props.handleClose();
    }
  }

  return (
    <>
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control type="text" placeholder="Current task" className='mb-3' value={taskValue} onChange={handleChange}/>
        <Form.Select className='mb-3' defaultValue={priority} onChange={handleOptionChange}>
          <option>Priority level</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Form.Select>
        <Form.Control type='date' className='mb-3' value={date} onChange={handleDateChange}/>
        <div className='d-flex justify-content-center'>
          <Button onClick={updateHandler}>Update</Button>
        </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default EditTaskModal