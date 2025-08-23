import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom"
//
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
      <div className="relative z-10 px-6 flex flex-col items-center w-full">
        <h1 className="text-white font-extrabold text-2xl xs:text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl">
            Precision Cooling. Reliable     
        </h1>
        <h1 className="text-white font-extrabold text-2xl xs:text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl mb-3">
            Performance. Expert Care.
        </h1>
        <p className="text-white mb-3 text-center text-sm sm:text-base">At Srimonitech, we deliver advanced air-conditioning, ventilation, and air filtration solutions across Dubai. From installation to maintenance, our certified team ensures efficiency, reliability, and comfort—tailored to your unique needs.</p>
        <div className="flex gap-2">
            <NavLink to="/about"
            className="bg-plum-600 text-white rounded-4xl px-4 py-2 xs:px-6 xs:py-2 text-sm sm:text-base">
              About Sri Monitech
            </NavLink>
            <NavLink to="/contact"
             className="bg-white rounded-4xl px-4 py-2 xs:px-6 xs:py-2 text-sm sm:text-base">
              Contact Today
            </NavLink>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
