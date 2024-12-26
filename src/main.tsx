import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'
import Routers from './routers/index.tsx'
import { UserProvider } from './providers/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routers />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
