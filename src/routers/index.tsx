import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import AuthLayout from '../pages/Auth/Layout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ProjectHome from '../pages/Projects/Home'
import ProjectLayout from '../pages/Projects/Layout'
import ProjectDetail from '../pages/Projects/Detail'
import ProjectEdit from '../pages/Projects/Edit'
import MainLayout from '../pages/MainLayout'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import About from '../pages/About'
import ProjectSearch from '../pages/Projects/Search'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="projects">
          <Route index element={<ProjectHome />} />
          <Route element={<ProjectLayout />}>
            <Route path=":pid" element={<ProjectDetail />} />
            <Route path=":pid/edit" element={<ProjectEdit />} />
            <Route path="search" element={<ProjectSearch />} />
          </Route>
        </Route>

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Routers
