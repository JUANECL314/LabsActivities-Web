import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { AppCounter } from './components/AppCounter.jsx'
import { Card } from './components/Card.jsx'
import { CustomHook } from './components/CustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook />
  </StrictMode>,
)
