import { FC } from 'react'
import { Outlet } from 'react-router'

const AuthLayout: FC = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'red',
      }}
    >
      <h1>React router</h1>
      <Outlet />
    </div>
  )
}

export default AuthLayout
