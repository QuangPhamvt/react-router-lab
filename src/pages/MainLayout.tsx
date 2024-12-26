import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router'

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>React router</h1>
      <nav className="flex mt-4 gap-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      {children}
    </div>
  )
}

export default MainLayout
