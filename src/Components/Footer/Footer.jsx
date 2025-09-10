import SocialMedia from './SocialMedia';
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';
import ServicesLinks from './ServicesLinks';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className='bg-teal-200 px-8 sm:px-10 py-10'>

      <motion.div 
        className='flex flex-wrap gap-y-6 justify-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
        <div className='w-full sm:w-6/12 lg:w-3/12 pr-3'>
          <SocialMedia/>
        </div>
        <div className='w-full sm:w-6/12 lg:w-3/12'>
          <QuickLinks/>
        </div>
        <div className='w-full sm:w-6/12 lg:w-3/12'>
          <ServicesLinks/>
        </div>
        <div className='w-full sm:w-6/12 lg:w-3/12'>
          <FooterContact/>
        </div>
      </motion.div>

      {/* Developed By */}
      <motion.h5 
       className='text-center mt-8 text-md'
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.2 }}
       transition={{ duration: 0.8, ease: "easeOut"}}
      >
        Developed By 
        <a className='underline text-plum-900 ml-2'
        href="https://www.sasikumar.online/projects"
         target="_blank" rel="noopener noreferrer">Sasikumar.online</a>
      </motion.h5>
    </section>
  ) 
}

export default Footer
