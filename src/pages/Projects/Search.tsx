import { FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

const ProjectSearch: FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  return (
    <div>
      <p>
        You searched for <i>{searchParams.get('search') || 'nothing'}</i>
      </p>
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

export default ProjectSearch
