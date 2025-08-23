import './App.css';
// Blur Image
import "react-lazy-load-image-component/src/effects/blur.css";
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ScrollToTop from './Components/ScrollToTop';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer/Footer';
import Services from './Services/Services';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <>
     <ScrollToTop/>
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
