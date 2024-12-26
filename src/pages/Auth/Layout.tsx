import { FC } from 'react'
import { Outlet } from 'react-router'

const AuthLayout: FC = () => {
  return (
    <div>
      <h1>React router</h1>
      <Outlet />
    </div>
  )
}

export default AuthLayout
