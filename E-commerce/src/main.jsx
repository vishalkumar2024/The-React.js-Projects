import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"
import ShopContextProvider from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </StrictMode>,
)
