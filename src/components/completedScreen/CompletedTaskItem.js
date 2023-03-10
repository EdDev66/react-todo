import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaTimes } from 'react-icons/fa'
import AuthContext from '../../context/Auth/authContext';
import TaskContext from '../../context/Tasks/taskContext';

function CompletedTaskItem(props) {
  const taskContext = useContext(TaskContext)
  const authContext = useContext(AuthContext)

  const { deleteMarked } = taskContext;
  const { user } = authContext;

  const handleClick = (e) => {
    console.log(props.id)
    deleteMarked(user, props.id)
  }

  return (
    <ListGroup.Item className='mb-2 d-flex justify-content-between'>
      <span className='date-marked my-auto'>Finished on 12/23/2022</span>
      <span className='lead'>{props.task}</span>
      <FaTimes className='remove-marked my-auto' onClick={handleClick} id={props.id}/>
    </ListGroup.Item>
  )
}

export default CompletedTaskItem