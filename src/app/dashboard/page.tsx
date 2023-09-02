import { getUser } from '@/lib/auth'
import { Home } from './components/Home'

export default function Dashboard() {
  const user = getUser()
  console.log(user)

  return (
    <>
      <Home userLogged={user}></Home>
    </>
  )
}
