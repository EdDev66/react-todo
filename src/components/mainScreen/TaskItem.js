import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { FaTrashAlt } from "react-icons/fa";
import TaskContext from '../../context/Tasks/taskContext';

function TaskItem(props) {
  const taskContext = useContext(TaskContext);
  const { markTask, deleteTask } = taskContext;

  const taskCheckHandler = (e) => {
    markTask(e.target.id)
  }

  const taskDeleteHandler = () => {
    deleteTask(props.id)
  }

  return (
    <ListGroup.Item className='mb-2 d-flex justify-content-between'>
        <Form.Check inline id={props.id} onClick={taskCheckHandler} checked={props.marked}/>
          <span className={`lead ${props.marked ? 'slashed' : ''}`}>{props.title}</span>
          <FaTrashAlt onClick={taskDeleteHandler} className='delete-icon'/>
      </ListGroup.Item>
  )
}

export default TaskItem