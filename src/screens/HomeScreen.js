import React, { Fragment } from 'react';
import NavbarComponent from '../components/mainScreen/Navbar';
import TaskInput from '../components/mainScreen/TaskInput';
import Container from 'react-bootstrap/Container';
import TaskList from '../components/mainScreen/TaskList';
import CompletedTaskList from '../components/completedScreen/CompletedTaskList';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button  from 'react-bootstrap/Button';

function HomeScreen() {
  
  return (
    <Fragment>
      <NavbarComponent />
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