import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react'

const LoginUserContext = createContext<{
  isLogin: boolean | null
  setIsLogin: Dispatch<boolean | null>
} | null>(null)

const useIsLoginContext = () => {
  const ctx = useContext(LoginUserContext)
  if (!ctx) {
    throw new Error('useIsLoginContext must be used inside LoginUser')
  }

  return ctx
}

const UserProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null)
  return (
    <LoginUserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginUserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { useIsLoginContext, UserProvider }
