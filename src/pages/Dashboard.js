import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Dashboard ({ user, successMsgHandler, setIsLoggedIn }) {
  const history = useHistory()

  const btnClickHandler = () => {
    setIsLoggedIn(false)
    successMsgHandler('Logout successful')
    history.push('/login')
  }

  return (
    <>
      <h1>Dashboard</h1>
      <div>Welcome {user.name}</div>
      <Button variant='light' className='mt-4' onClick={btnClickHandler}>
        Logout
      </Button>
    </>
  )
}
