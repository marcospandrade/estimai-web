'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navbar, Typography, IconButton, Button, Avatar } from '@/lib/material'
import { useAuth } from '@/hooks/useAuth'

export interface DashboardNavbarProps {}

export function DashboardNavbar({}: DashboardNavbarProps) {
  const fixedNavbar = true
  const { user } = useAuth()
  const pathName = usePathname().split('/').pop()

  return (
    <Navbar
      color="white"
      className=" rounded-xl transition-all sticky top-4 z-40 py-3 shadow-lg shadow-blue-gray-500/5 mb-4"
      fullWidth
      blurred
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Typography variant="h6" color="blue-gray">
            {pathName}
          </Typography>
        </div>
        <div className="flex items-center">
          <Avatar src={user?.picture} width={10} height={10} />
          <Link href="dashboard/profile">
            <Button variant="text" color="blue-gray" className="hidden items-center gap-1 px-4 xl:flex">
              <FontAwesomeIcon icon={faSignOut} className="h-5 w-5 mr-2 text-inherit" />
              Logout
            </Button>
            <IconButton variant="text" color="blue-gray" className="grid xl:hidden">
              <FontAwesomeIcon icon={faPerson} className="h-5 w-5 text-white" />
            </IconButton>
          </Link>
        </div>
      </div>
    </Navbar>
  )
}
