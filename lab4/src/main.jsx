import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { OnePieceHook } from './component/OnePieceHook.jsx'
import { Focus } from './component/Focus.jsx'
import { CallBackHook } from './component/CallBackHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallBackHook />
  </StrictMode>,
)
