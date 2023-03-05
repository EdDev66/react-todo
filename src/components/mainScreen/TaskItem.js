import React, { useContext, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import TaskContext from '../../context/Tasks/taskContext';
import AuthContext from '../../context/Auth/authContext';
import EditTaskModal from './EditTaskModal';

function TaskItem(props) {
  const taskContext = useContext(TaskContext);
  const authContext = useContext(AuthContext);

  const { markTask, deleteTask, setActiveTask } = taskContext;
  const { user } = authContext;

  const [show, setShow] = useState(false);

  const taskCheckHandler = (e) => {
    markTask(e.target.id, user)
  }

  const taskDeleteHandler = () => {
    deleteTask(props.userId, props.id)
  }

  // Placeholder
  const testHandler = () => {}

  const taskEditHandler = () => {
    setShow(true);
    setActiveTask(props.id);
  }

  const taskCloseHandler = () => {
    setShow(false)
  }

  return (
    <>
    <EditTaskModal show={show} handleClose={taskCloseHandler}/>
    <ListGroup.Item className='mb-2 d-flex justify-content-between align-items-center'>
      <div>
        <Form.Check 
          className='task-checkbox'
          inline id={props.id} 
          onClick={taskCheckHandler} 
          onChange={testHandler} 
          checked={props.marked}
        />
        <span className='date-marked'>Due: {props.date}</span>
        </div>
          <div className='d-flex flex-column align-items-center'>
          <span className={`lead ${props.marked ? 'slashed' : ''}`}>{props.title}</span>
          <span >
            Priority: 
            <span className={props.priority === 'Low' ? 'text-success' : (props.priority === 'Medium' ? 'text-warning' : 'text-danger')}>
              {props.priority}
            </span>
          </span>
          </div>
          <div>
          <FaPencilAlt className='edit-icon' onClick={taskEditHandler}/>
          <FaTrashAlt onClick={taskDeleteHandler} className='delete-icon ms-2'/>
          </div>
      </ListGroup.Item>
    </>
  )
}

export default TaskItem