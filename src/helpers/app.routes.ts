import { IconDefinition, faHome, faPerson } from '@fortawesome/free-solid-svg-icons'

export interface Route {
  name: string
  path: string
  icon: IconDefinition
}

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/dashboard',
    icon: faHome,
  },
  {
    name: 'Profile',
    path: '/dashboard/profile',
    icon: faPerson,
  },
]
