import { FaArrowRight } from "react-icons/fa"
import { MdCall } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="mt-15 sm:mt-18 relative h-90 xs:h-100 sm:h-120 flex items-center
     justify-start bg-white">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src="/Images/Home/hero-section-img.jpg"
          alt="AC Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 px-6 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
        {/* Title */}
        <motion.h1 
          className="text-white font-extrabold text-2xl xs:text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Precision Cooling. Reliable     
        </motion.h1>
        <motion.h1 
          className="text-white font-extrabold text-2xl 
          xs:text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            Performance. Expert Care.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-white mb-3 sm:mb-4 text-center text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          At Srimonitech, we deliver advanced air-conditioning, ventilation, 
          and air filtration solutions across Dubai. From installation to maintenance, 
          our certified team ensures efficiency, reliability, and comfort—tailored 
          to your unique needs.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5}}
        >
            <NavLink to="/about"
            className="flex items-center gap-x-1 sm:gap-x-2
            bg-plum-600 text-white rounded-4xl px-3 sm:px-6 
            py-2 text-sm sm:text-base font-medium shadow-xl
             hover:bg-plum-500 hover:shadow-xl hover:scale-105
             active:scale-95 active:bg-plum-700 transition-all duration-300 ease-in-out">
             About Srimoni tech <FaArrowRight />
            </NavLink>
            <NavLink to="/contact"
             className="flex items-center gap-1
             bg-white rounded-4xl px-3 sm:px-6 py-2 text-sm sm:text-base font-medium
             shadow-xl hover:bg-teal-100 hover:shadow-xl hover:scale-105
             active:scale-95 active:bg-teal-300 transition-all duration-300 ease-in-out">
              <MdCall className="text-lg sm:text-xl"/>Contact Today
            </NavLink>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
