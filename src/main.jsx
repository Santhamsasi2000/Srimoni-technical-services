import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './Home/HeroSection.jsx'
import NavBar from './Components/NavBar.jsx'
import OurTeam from './About/OurTeam.jsx'
// import NavBar from './NavBar/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* <OurTeam/> */}
    </BrowserRouter>
  </StrictMode>,
)
