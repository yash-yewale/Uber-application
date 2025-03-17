import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import Usercontext from './Context/Usercontext.jsx'
import Captaincontext from './Context/Captaincontext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Captaincontext>
      <Usercontext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Usercontext>
    </Captaincontext>
  </StrictMode>
);
