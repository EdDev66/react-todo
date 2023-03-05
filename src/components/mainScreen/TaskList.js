import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem';
import TaskContext from '../../context/Tasks/taskContext';

function TaskList() {
  const taskContext = useContext(TaskContext);

  const { tasks } = taskContext;

  if(tasks.length === 0) {
    return <div className='d-flex justify-content-center mt-4'>
      <h2>Start adding some tasks!</h2>
    </div>
  }

  return (
    <>
    <ListGroup variant='flush' className='mt-4'>
      {tasks.map((item) => <TaskItem 
      title={item.task} 
      key={item.id}
      userId={item.userId}
      id={item.id} 
      marked={item.completed}
      date={item.dueDate}
      priority={item.priority}
    />)}
    </ListGroup>
    </>
  )
}

export default TaskList