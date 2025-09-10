import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const points = [
    {
        id:1,
        img: "/Images/Home/HVAC Services/Routine Maintenance.jpeg",
        title:"Routine Maintenance",
        desc:"Preventive system checks.",
    },
    {
        id:2,
        img: "/Images/Home/HVAC Services/Emergency Repair.jpeg",
        title:"Emergency Repairs",
        desc:"Fast response for downtime issues.",
    },
    {
        id:3,
        img: "/Images/Home/HVAC Services/System Upgrades.jpeg",
        title:"System Upgrades",
        desc:"Improve efficiency with modern tech.",
    },
    {
        id:4,
        img: "/Images/Home/HVAC Services/Air Filtration & Ventilation.jpeg",
        title:"Air Filtration & Ventilation",
        desc:"Cleaner, healthier air.",
    },

];

const title = "Comprehensive HVAC Services";

const ServicesHome = () => { 
  return (
    <section className='p-4 sm:p-5 md:p-6 mt-10'>

       {/* Title With Animation */}
       <motion.h2 
        className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-5'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
       >
        {title}
       </motion.h2>

       {/* Each Service with Animation */}
       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7'>
          {
           points.map(({ id, img, title, desc }, index)=>(
                 <motion.div 
                  className='' 
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut"}}
                 >
                    <div className="flex flex-col items-center h-full shadow-2xl
                     rounded-2xl p-3 bg-teal-100">
                        <LazyLoadImage src={img} className="mb-2 "/>
                        <h5 className='mb-1 font-bold text-xl'>{title}</h5>
                        <p className='text-center'>{desc}</p>
                    </div>
                 </motion.div>
  
           ))
          }
       </div>
    </section>
  )
}

export default ServicesHome
