import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem';
import TaskContext from '../../context/Tasks/taskContext';

function TaskList() {
  const taskContext = useContext(TaskContext);

  const { tasks } = taskContext;

  return (
    <ListGroup variant='flush'>
      {tasks.map((item) => <TaskItem title={item.task} key={item.id} id={item.id} marked={item.completed}/>)}
    </ListGroup>
  )
}

export default TaskList