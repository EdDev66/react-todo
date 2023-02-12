import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function TaskPriority(props) {
  const [variant1, setVariant1] = useState('outline-success');
  const [variant2, setVariant2] = useState('outline-warning');
  const [variant3, setVariant3] = useState('outline-danger');

  const handleClick = (e, type) => {
    if(type === 'success') {
      setVariant1('success')
      setVariant2('outline-warning')
      setVariant3('outline-danger')
    } else if (type === 'warning') {
      setVariant2('warning')
      setVariant1('outline-success')
      setVariant3('outline-danger')
    } else {
      setVariant3('danger')
      setVariant1('outline-success')
      setVariant2('outline-warning')
    }
    props.handlePriority(e.target.innerHTML)
  }

  return (
    <div className={`my-4 justify-content-center ${props.visible ? 'd-flex' : 'd-none'}`}>
      <h3 className='me-2'>Priority</h3>
        <Button variant={variant1} className='me-2' onClick={(e) => handleClick(e, 'success')}>Low</Button>
        <Button variant={variant2} className='me-2' onClick={(e) => handleClick(e, 'warning')}>Medium</Button>
        <Button variant={variant3} className='me-2' onClick={(e) => handleClick(e, 'danger')}>High</Button>
    </div>
  )
}

export default TaskPriority