import React, { Fragment } from 'react';
import NavbarComponent from '../components/mainScreen/Navbar';
import TaskInput from '../components/mainScreen/TaskInput';
import Container from 'react-bootstrap/Container';
import TaskList from '../components/mainScreen/TaskList';

function HomeScreen(props) {
  
  return (
    <Fragment>
      <NavbarComponent />
      <Container>
        <h1>ToDo List</h1>
        <TaskInput />
        <TaskList />
      </Container>
    </Fragment>
  )
}

export default HomeScreen