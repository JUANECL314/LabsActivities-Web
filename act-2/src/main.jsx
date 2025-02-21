import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {PrimerComp} from './PrimerComp.jsx'
import {SecondComp} from './SecondComp.jsx'
import {MyApp} from './MyApp.jsx'
import {ThirdComp} from './ThirdComp.jsx'
import { FourthComp } from './FourthComp.jsx'
import { FifthComp } from './FifthComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  
  </StrictMode>,
)
