import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// `npm run build` pre-renders App into #root, so production has markup to adopt.
// `vite dev` serves the empty shell from index.html, hence the client-render fallback.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
