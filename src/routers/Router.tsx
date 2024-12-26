import { FC, ReactNode } from 'react'
import { RouteObject } from 'react-router'
import MainLayout from '../pages/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import ProjectHome from '../pages/Projects/Home'
import ProjectDetail from '../pages/Projects/Detail'
import ProjectSearch from '../pages/Projects/Search'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import Login from '../pages/Auth/Login'
import AuthLayout from '../pages/Auth/Layout'
import Register from '../pages/Auth/Register'

export type TCustomRoute = RouteObject & {
  metadata: {
    isAuthen: boolean
    layout?: FC<{ children: ReactNode }>
  }
}

export const route: TCustomRoute[] = [
  {
    path: '/',
    element: <Home />,
    metadata: {
      layout: MainLayout,
      isAuthen: false,
    },
  },
  {
    path: '/about',
    element: <About />,
    metadata: {
      layout: MainLayout,
      isAuthen: false,
    },
  },
  {
    path: '/login',
    element: <Login />,
    metadata: {
      layout: AuthLayout,
      isAuthen: false,
    },
  },
  {
    path: '/register',
    element: <Register />,
    metadata: {
      layout: AuthLayout,
      isAuthen: false,
    },
  },
  {
    path: '/projects',
    element: <ProjectHome />,
    metadata: {
      layout: MainLayout,
      isAuthen: true,
    },
    children: [
      {
        path: ':pid',
        element: <ProjectDetail />,
      },
      {
        path: 'search',
        element: <ProjectSearch />,
      },
    ],
  },
  {
    path: '/contact',
    element: <Contact />,
    metadata: {
      layout: MainLayout,
      isAuthen: false,
    },
  },
  {
    path: '*',
    element: <NotFound />,
    metadata: {
      layout: MainLayout,
      isAuthen: false,
    },
  },
]
