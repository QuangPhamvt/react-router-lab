import { FC, useState } from 'react'
import { useNavigate } from 'react-router'

const ProjectHome: FC = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [search, setSearch] = useState('')
  return (
    <div className="flex flex-col gap-y-4 pl-8 mt-4">
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          navigate(`/projects/${id}`)
        }}
      >
        submit
      </button>
      <br />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          navigate(`/projects/search?search=${search}`)
        }}
      >
        search
      </button>
    </div>
  )
}

export default ProjectHome
