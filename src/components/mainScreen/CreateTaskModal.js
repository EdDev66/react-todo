import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateTaskModal(props) {
  return (
    <Modal show={props.show} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Control type="text" placeholder="Task description" className='mb-3'/>
      <Form.Select className='mb-3'>
          <option>Priority level</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
      </Form.Select>
      <Form.Control type='date' className='mb-3'/>
      <div className='d-flex justify-content-center'>
          <Button>Update</Button>
      </div>
      </Modal.Body>
    </Modal>
  )
}

export default CreateTaskModal