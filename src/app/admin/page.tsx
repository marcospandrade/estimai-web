import { AppLayout } from '@/components/app/AppLayout'
import { getUser } from '@/lib/auth'
import Image from 'next/image'
import { AdminFooter } from './components/AdminFooter'
import { Sidenav } from './components/Sidenav'
import { IconDefinition, faHome, faPerson } from '@fortawesome/free-solid-svg-icons'

export interface Route {
  name: string
  path: string
  icon: IconDefinition
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/admin',
    icon: faHome,
  },
  {
    name: 'Profile',
    path: '/admin/profile',
    icon: faPerson,
  },
]

function HomePage() {
  const user = getUser()
  console.log(user)

  return (
    <AppLayout>
      <div>Olá, {user.name}</div>
      <Image src={user.picture} width={100} height={100} alt="profile picture" />

      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidenav routes={routes} brandImg={'../../public/img/logo-ct.png'} brandName="EstimAi" />\
        <div className="p-4 xl:ml-80">
          {/* <DashboardNavbar /> */}
          {/* <Configurator /> */}
          {/* <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        > */}
          {/* <Cog6ToothIcon className="h-5 w-5" /> */}
          {/* </IconButton> */}
          {/* <Routes> */}
          {/* {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes> */}
          {/* <div className="text-blue-gray-600"> */}
          <AdminFooter />
          {/* </div> */}
        </div>
      </div>
    </AppLayout>
  )
}

export default HomePage
