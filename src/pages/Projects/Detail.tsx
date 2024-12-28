import { FC } from 'react'
import { useNavigate, useParams } from 'react-router'

const ProjectDetail: FC = () => {
  const { pid } = useParams()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col pl-4 mt-12 gap-y-2">
      <div>Project Detail {pid}</div>
      <button
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}
      >
        Back
      </button>
    </div>
  )
}

export default ProjectDetail
