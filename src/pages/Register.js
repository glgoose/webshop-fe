import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

function Register ({ successMsgHandler }) {
  const firstNameEl = useRef(null)
  const lastNameEl = useRef(null)
  const emailEl = useRef(null)
  const pwEl = useRef(null)

  const history = useHistory()

  const [error, setError] = useState(null)

  const submitHandler = e => {
    e.preventDefault()

    const data = {
      firstName: firstNameEl.current.value,
      lastName: lastNameEl.current.value,
      email: emailEl.current.value,
      password: pwEl.current.value
    }

    fetch('https://webshop-rest-api.herokuapp.com/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          successMsgHandler('Registration successful')
          history.push('/login')
        }
        return res.json()
      })
      .then(body => {
        if (body.error) setError(body.error)
      })
  }

  return (
    <form onSubmit={submitHandler}>
      <h1 className='mb-4'>Register</h1>
      {error && <Alert variant='danger'>{error}</Alert>}
      <div className='mb-3'>
        <label htmlFor='firstName' className='form-label'>
          First name
        </label>
        <input
          ref={firstNameEl}
          type='text'
          className='form-control'
          id='firstName'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='lastName' className='form-label'>
          Last name
        </label>
        <input
          ref={lastNameEl}
          type='text'
          className='form-control'
          id='lastName'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email address
        </label>
        <input ref={emailEl} type='email' className='form-control' id='email' />
        <div id='emailHelp' className='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          ref={pwEl}
          type='password'
          className='form-control'
          id='password'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default Register
