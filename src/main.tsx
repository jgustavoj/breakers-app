import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the new component from the features directory
import Home from './features/home/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
