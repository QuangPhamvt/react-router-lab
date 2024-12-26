import { FC, ReactNode } from 'react'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>React router</h1>
      <p>Auth layout</p>
      {children}
    </div>
  )
}

export default AuthLayout
