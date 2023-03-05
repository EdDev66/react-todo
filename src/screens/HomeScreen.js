import React, { Fragment, useContext } from 'react';
import TaskInput from '../components/mainScreen/TaskInput';
import Container from 'react-bootstrap/Container';
import TaskList from '../components/mainScreen/TaskList';
import CompletedTaskList from '../components/completedScreen/CompletedTaskList';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AuthContext from '../context/Auth/authContext';
import { useEffect } from 'react';
import TaskContext from '../context/Tasks/taskContext';

function HomeScreen() {
  
  const authContext = useContext(AuthContext)
  const taskContext = useContext(TaskContext)
  const { user } = authContext;
  const { fetchTasks, fetchMarked } = taskContext;

  useEffect(() => {
    if(user) {
      fetchTasks(user);
      fetchMarked(user);
    }
  }, [user])

  return (
    <Fragment>
      <Container>
        <h1>ToDo List</h1>
        <TaskInput />
        <Tabs justify className='mb-4'>
          <Tab eventKey='Tasks' title='Active Tasks'>
            <TaskList />
          </Tab>
          <Tab eventKey='Completed' title='Completed Tasks'>
            <CompletedTaskList />
          </Tab>
        </Tabs>
      </Container>
    </Fragment>
  )
}

export default HomeScreen