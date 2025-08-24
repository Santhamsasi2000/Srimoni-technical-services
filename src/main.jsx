import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContactUs from './ContactUs/ContactUs.jsx'
import HeroSection from './Home/HeroSection.jsx'
import Footer from './Components/Footer/Footer.jsx'
// import NavBar from './NavBar/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* <Footer/> */}
    </BrowserRouter>
  </StrictMode>,
)
