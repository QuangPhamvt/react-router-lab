import { FC } from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout: FC = () => {
  return (
    <div>
      <h1>React router</h1>
      <nav className="flex mt-4 gap-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout
