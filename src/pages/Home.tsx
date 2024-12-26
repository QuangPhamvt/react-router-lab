import { FC } from 'react'
import { useIsLoginContext } from '../providers/UserContext'

const Home: FC = () => {
  const { isLogin, setIsLogin } = useIsLoginContext()
  return (
    <div className="flex flex-col gap-y-2">
      <div>Home</div>
      {isLogin && (
        <button
          onClick={() => {
            setIsLogin(false)
          }}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Home
