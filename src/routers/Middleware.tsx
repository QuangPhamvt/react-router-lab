import { FC, ReactNode } from 'react'
import { useIsLoginContext } from '../providers/UserContext'

interface IProps {
  path: string
  component: ReactNode
  layout?: FC<{ children: ReactNode }>
  isAuthen: boolean
}

const Middleware: FC<IProps> = (props) => {
  const { component, isAuthen, layout: Layout } = props
  const { isLogin } = useIsLoginContext()
  console.log(isLogin)
  if (isAuthen && !isLogin) {
    return Layout ? (
      <Layout>
        <div className="flex flex-col pl-4 mt-12 gap-y-2">
          <div>Not Authorized</div>
        </div>
      </Layout>
    ) : (
      <div className="flex flex-col pl-4 mt-12 gap-y-2">
        <div>Not Authorized</div>
      </div>
    )
  }
  return Layout ? <Layout>{component}</Layout> : <>{component}</>
}
export default Middleware
