import SocialMedia from './SocialMedia';
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';
import ServicesLinks from './ServicesLinks';

const Footer = () => {
  return (
    <section 
    className='bg-teal-300 px-5 py-10 flex flex-wrap gap-y-6 justify-center'>
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
    </section>
  ) 
}

export default Footer
