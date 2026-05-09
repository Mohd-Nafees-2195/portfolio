import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <div className='overflow-x-hidden'>
     <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>,
  </div>
 
)
