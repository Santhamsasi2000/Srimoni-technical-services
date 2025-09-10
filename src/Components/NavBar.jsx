import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const whatsappLink = "https://api.whatsapp.com/send?phone=971542458604";
const NavBar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50)
      {
        setScrolled(true);
      }
      else
      {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   }, []);

    const toggleMenu = () => 
    {
      setMenuOpen(prev => !prev)
    };

    const closeMenu = () => {
      setMenuOpen(false);
    }

    //Animation Variants
    const navVariants = {
      hidden: { y: -80, opacity: 0 },
      visible: { y:0, opacity: 1 , transition: { duration: 1.5, ease: "easeOut" }}
    };

    const menuVariants = {
      hidden: { x: 80, opacity: 0 },
      visible: { x: 0, opacity: 1 , transition: { duration:1, ease: "easeOut" }},
      exit: { x: 80, opacity: 0 , transition: { duration: 1, ease: "easeIn" }}
    };

  return (
    <motion.nav 
      className={`px-3 py-1 sm:px-4 sm:py-2
      transition-colors duration-300 ease-in-out fixed left-0 right-0 top-0 z-50
      ${scrolled ? "bg-white"
         : "bg-white shadow-plum-50"}
         `}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      >
       <div className="flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="">
          <motion.div 
           className="flex items-center gap-2 mb-1"
           animate={{ scale: scrolled ? 0.9 : 1 }}
           transition={{ duration: 0.3 }}>
            <LazyLoadImage src="/Images/Home/changed-logo.jpg" 
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"/>
            <motion.h1 
            className="text-plum-800 text-2xl sm:text-[28px] font-bold mb-0 font-nunito"
            whileHover={{scale: 1.05}}
            transition={{ type: "spring", stiffness: 300 }}
            >
              SRIMONI
            </motion.h1>
           </motion.div>
            <p>Technical Services LLC</p>
        </NavLink>
        
        {/*======= Desktop Menus ====== */}
        {/* ====== sm to xxl ========*/}
        {/* Menus */}

        <ul className="hidden md:flex gap-10">
          <li className="">
            <NavLink className="text-teal-900" to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink className="text-teal-900" to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li className="">
            <NavLink className="text-teal-900" to="/about" onClick={closeMenu}>
               About
            </NavLink>
          </li>
          <li className="">
            <NavLink className="text-teal-900" to="/faq" onClick={closeMenu}>
               FAQ
            </NavLink>
          </li>
          <li className="">
            <NavLink className="text-teal-900" to="/contact" onClick={closeMenu}>
               Contact
            </NavLink>
          </li>
        </ul>

        <ul className="hidden lg:block">
          <a href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1
          rounded-4xl px-5 py-2 bg-plum-600 font-semibold text-white shadow-lg
          hover:bg-plum-500
          hover:scale-105 hover:shadow-2xl
          active:scale-95
           transition-colors duration-300 ease-in-out">
            <FaWhatsapp className="text-xl"/> Whatsapp
          </a>
        </ul>

         {/* ========== Mobile View ==========*/}
         {/* Toggle Button */}
         <div className="block md:hidden">
          <motion.button
            className="mt-2"
            type="button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            animate={{ rotate: menuOpen ? 180 : 0}}
          >
            {menuOpen ? (
              <RxCross1 className="text-2xl text-plum-900 hover:text-plum-600"/>
            ) : (
              <RxHamburgerMenu className="text-2xl text-plum-900 hover:text-plum-600"/>
            )}
          </motion.button>
         </div>
       </div>

       {/* Mobile Menu */}
        <AnimatePresence>
        {
            menuOpen && (
            <motion.div
             className="block md:hidden"
             initial="hidden"
             animate="visible"
             exit="exit"
             variants={menuVariants}>
              <ul className="flex flex-col items-center gap-6 mt-5 mb-5">
                <li className="">
                    <NavLink className="text-teal-900" to="/" onClick={closeMenu}>
                      Home
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className="text-teal-900" to="/services" onClick={closeMenu}>
                      Services
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className="text-teal-900" to="/about" onClick={closeMenu}>
                      About
                    </NavLink>
                </li>
                <li className="">
                  <NavLink className="text-teal-900" to="/faq" onClick={closeMenu}>
                    FAQ
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="text-teal-900" to="/contact" onClick={closeMenu}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-plum-600 px-4 py-2 text-white flex items-center gap-1 font-bold rounded-4xl">
                      <FaWhatsapp className="text-xl"/> Whatsapp
                    </a>
                </li>
              </ul> 
            </motion.div>
            )
        }
        </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar


