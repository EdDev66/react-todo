import React, { useContext, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import AuthContext from '../../context/Auth/authContext'

function Login() {
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [showAlert, setShowAlert] = useState(false);

  const { email, password } = user;

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
    if(email !== '' && password !== '')
    authContext.login(user);
    
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
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required onChange={onChange}/>
      </Form.Group>
      <Button variant='primary' onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default Login