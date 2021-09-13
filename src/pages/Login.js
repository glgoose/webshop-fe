import { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

function Login ({ loginSuccessMsg, loggedIn }) {
  const emailEl = useRef(null)
  const pwEl = useRef(null)

  const history = useHistory()

  const submitHandler = e => {
    e.preventDefault()

    const data = {
      email: emailEl.current.value,
      password: pwEl.current.value
    }

    fetch('https://webshop-rest-api.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        res.json().then(body => {
          const user = { name: body.loggedInUser }
          loggedIn(user)
          history.push('/dashboard')
        })
      }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <h1 className='mb-4'>Login</h1>
      {loginSuccessMsg && <Alert variant='success'>{loginSuccessMsg}</Alert>}
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          ref={emailEl}
          type='email'
          className='form-control'
          id='exampleInputEmail1'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          ref={pwEl}
          type='password'
          className='form-control'
          id='exampleInputPassword1'
        />
      </div>
      <div className='mb-3 form-text'>
        No account? <Link to='/register'>Register</Link>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default Login
