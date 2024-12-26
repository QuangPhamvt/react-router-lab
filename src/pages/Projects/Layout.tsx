import { FC } from 'react'
import { Outlet } from 'react-router'

const ProjectLayout: FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Outlet />
    </div>
  )
}

export default ProjectLayout
