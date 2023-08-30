'use client'

import PropTypes from 'prop-types'
import { Avatar, Button, IconButton, Typography } from '@/lib/material'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Route } from '../page'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

// import { useMaterialTailwindController, setOpenSidenav } from "@/context";

interface SidenavProps {
  brandImg: string
  brandName: string
  routes: Route[]
}

export function Sidenav({ brandImg, brandName, routes }: SidenavProps) {
  //   const [controller, dispatch] = useMaterialTailwindController();
  //   const { sidenavColor, sidenavType, openSidenav } = controller;

  const pathName = usePathname()
  const { push } = useRouter()

  console.log()
  const [openSideNav, setOpenSideNav] = useState(true)
  const sidenavTypes = {
    dark: 'bg-gradient-to-br from-blue-gray-800 to-blue-gray-900',
    white: 'bg-white shadow-lg',
    transparent: 'bg-transparent',
  }

  function isActiveRoute(routePath: string) {
    return pathName === routePath
  }

  function changeRoute(route: string) {
    return push(route)
  }

  return (
    <aside
      className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ${
        openSideNav ? 'translate-x-0' : '-translate-x-80'
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="relative border-b border-white/20">
        <Link href="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EseM8xGgrPeEfubhmXjbXb3Tn-_1N_nOQA&usqp=CAU"
            width={50}
            height={50}
            alt="Logo"
          />
          <Typography variant="h6" color="white">
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSideNav(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </IconButton>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {routes.map((route) => (
            <li key={route.path} className="mx-3.5 mt-4 mb-2">
              <Button
                variant={isActiveRoute(route.path) ? 'gradient' : 'text'}
                color={isActiveRoute(route.path) ? 'white' : 'blue-gray'}
                className="flex items-center gap-4 px-4 capitalize"
                fullWidth
                onClick={() => changeRoute(route.path)}
              >
                <FontAwesomeIcon icon={route.icon} size="sm" />
                <Typography color="inherit" className="font-medium capitalize">
                  {route.name}
                </Typography>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
