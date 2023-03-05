import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import AuthContext from '../../context/Auth/authContext';
import Alert from 'react-bootstrap/Alert';

function Register() {
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  })
  const [showAlert, setShowAlert] = useState(false);

  const { email, username, password, password2 } = user

  const handleAlert = () => {
    setShowAlert(true)
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 3000);

    return () => clearTimeout(timer)
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    if(email !== '' && password !== '' && password2 !== '' && username !== '')
    authContext.register(user);
    else {
      handleAlert();
    }
  }

  return (
    <div>
      {showAlert ? <Alert variant='danger'>Please complete all fields!</Alert> : ''}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name='email' required onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name='username' required onChange={onChange}/>
      </Form.Group>
     <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name='password2' required onChange={onChange}/>
      </Form.Group>
      <Button variant='primary' onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default Register