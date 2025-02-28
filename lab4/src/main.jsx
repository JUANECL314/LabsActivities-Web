import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OnePieceHook } from './component/OnePieceHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnePieceHook />
  </StrictMode>,
)
