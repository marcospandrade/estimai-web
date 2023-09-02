'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navbar, Typography, IconButton, Button, Avatar, Menu, MenuHandler, MenuList, MenuItem } from '@/lib/material'
import { useAuth } from '@/hooks/useAuth'

export function DashboardNavbar() {
  const { user } = useAuth()
  const { push } = useRouter()
  const pathName = usePathname().split('/').pop()

  function onLogout() {
    push('/')
  }

  return (
    <Navbar
      className=" rounded-xl transition-all sticky top-4 z-40 py-3 shadow-lg shadow-blue-gray-500/5 mb-4 bg-gradient-to-br from-indigo-500 to-indigo-600"
      fullWidth
      blurred
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Typography variant="h5" color="white">
            {pathName}
          </Typography>
        </div>
        <div className="flex items-center">
          <Menu>
            <MenuHandler>
              <Button variant="text" className="flex flex-row justify-center items-center">
                <Avatar src={user?.picture} width={10} height={10} />
                <Typography variant="h6" color="white" className="ml-4">
                  {user?.name.split(' ')[0]}
                </Typography>
              </Button>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem
                className="items-center gap-1 justify-center px-4 py-2 xl:flex"
                color="indigo"
                onClick={onLogout}
              >
                <FontAwesomeIcon icon={faSignOut} className="h-5 w-5 mr-2 text-inherit" />
                Logout
              </MenuItem>
              <MenuItem className="grid xl:hidden" color="indigo">
                <Link href="dashboard/profile">
                  <FontAwesomeIcon icon={faSignOut} className="h-5 w-5 mr-2 text-inherit" />
                  Logout
                  <IconButton variant="text" color="indigo" className="grid ">
                    <FontAwesomeIcon icon={faPerson} className="h-5 w-5 text-white" />
                  </IconButton>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  )
}
