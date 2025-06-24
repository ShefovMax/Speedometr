import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Speedometr from './components/Speedometr.tsx'
import { config } from './config.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Speedometr config={config}/>
  </StrictMode>,
)
