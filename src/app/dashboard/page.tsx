import Image from 'next/image'

import { getUser } from '@/lib/auth'

export default function Dashboard() {
  const user = getUser()
  console.log(user)

  return (
    <>
      <div>Olá, {user.name}</div>
      <Image src={user.picture} width={100} height={100} alt="profile picture" />
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

      {/* </div> */}
    </>
  )
}
