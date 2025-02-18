import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Second from './Second.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Second></Second>
  </StrictMode>,
)
