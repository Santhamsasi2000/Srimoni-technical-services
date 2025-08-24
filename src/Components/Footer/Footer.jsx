import SocialMedia from './SocialMedia';
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';
import ServicesLinks from './ServicesLinks';

const Footer = () => {
  return (
    <section className='bg-teal-200 px-8 sm:px-10 py-10' >
      <div className='flex flex-wrap gap-y-6 justify-center'>
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
      </div>
      {/* Developed By */}
      <h5 className='text-center mt-8 text-md'>Developed By 
        <a className='underline text-plum-900 ml-2'>Sasikumar.online</a>
      </h5>
    </section>
  ) 
}

export default Footer
