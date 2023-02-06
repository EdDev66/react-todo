import React, { useContext } from 'react';
import TaskContext from '../../context/Tasks/taskContext';
import CompletedTaskItem from './CompletedTaskItem';
import ListGroup from 'react-bootstrap/ListGroup';

function CompletedTaskList() {
  const taskContext = useContext(TaskContext);

  const { completedTasks } = taskContext;

  if(completedTasks.length === 0) {
    return <div className='d-flex justify-content-center mt-4'>
      <h2>No tasks completed!</h2>
    </div>
  }

  return (
    <ListGroup variant='flush'>
    {completedTasks.map(item => <CompletedTaskItem task={item.task} key={item.id} id={item.id}/>)}
    </ListGroup>
  )
}

export default CompletedTaskList