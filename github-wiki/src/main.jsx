import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global-styles.css'
import App from './pages/home/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
