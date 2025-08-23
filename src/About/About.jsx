import OurTeam from "./OurTeam";
import Vision from "./Vision";

const About = () => {
    return (
      <section className="mt-15 sm:mt-18 p-4 sm:p-5 md:p-6">
       <h2 
        className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-3'>
        About Us
       </h2>
       <p className="italic text-center text-teal-800 font-bold mb-4">"Choose Srimoni Technical Services L.L.C—Where Quality Meets Reliability."</p>

        <p className="mb-2">At <span className="font-medium">Srimoni Technical Services L.L.C</span>, we believe in engineering excellence, precision, and customer satisfaction. Established two years ago, we have rapidly evolved into a trusted name in the UAE, delivering top-tier technical solutions.</p>
      
        <p className="mb-2">With <span className="font-medium">10+ employees</span>, Srimoni Technical Services L.L.C has built a team of skilled professionals who are experts in their respective fields. The team’s dedication and expertise have been instrumental in completing projects on time and to the highest standards, earning the trust of clients.</p>

        <p className="">In just <span className="font-medium">two years</span>, Srimoni Technical Services has built a strong reputation for reliability and quality. We've already completed projects in over <span className="font-medium">60 villas</span>, demonstrating our capacity to handle diverse needs and deliver exceptional results.  Our commitment to customer satisfaction has fueled our growth and positioned us as a trusted partner for all your climate control needs.</p>
        
        <Vision/>

        {/* <OurTeam/> */}
      </section>
    );
  };
  
  export default About;
  
