import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location/Location";

const ContactUs = () => {
  return (
     <section className='mt-15 sm:mt-18 p-4 sm:p-5 md:px-15 md:py-10'>
      <h2 
        className='text-center text-plum-800 text-3xl font-bold mb-5 md:mb-10 mt-3'>
        Contact Us
       </h2>
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-y-10">
        <div className="w-full lg:w-6/12">
          <Location />
        </div>
        <div className="w-full lg:w-6/12">
           <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
