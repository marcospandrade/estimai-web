import { AppLayout } from '@/components/app/AppLayout'
import { getUser } from '@/lib/auth'
import { Button } from '@material-tailwind/react'

function HomePage() {
  const user = getUser()
  console.log(user)

  return (
    <AppLayout>
      <div>ausdh</div>
    </AppLayout>
  )
}

export default HomePage
