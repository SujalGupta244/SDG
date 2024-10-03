import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {AuthContext} from './context/context.jsx'


createRoot(document.getElementById('root')).render(
    <AuthContext>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthContext>
)
