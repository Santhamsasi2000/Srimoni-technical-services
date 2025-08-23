import { NavLink } from 'react-router-dom';
const QuickLinks = () => {
  return (
     <div>
        <div className='flex flex-col items-start'>
            <p className='text-plum-900 font-bold text-xl mb-2'>Quick Links</p>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/">Home</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/services">Services</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/about">About Us</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/faq">FAQ</NavLink>
            <NavLink className="footer-Links text-decoration-none mb-2" to="/contact">Contact Us</NavLink>
        </div>
    </div>
  )
}

export default QuickLinks
