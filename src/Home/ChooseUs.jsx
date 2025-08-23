import { FaClock, FaHeart, FaTools, FaUserTie } from "react-icons/fa";

const points = [
    {
        id:1,
        Icon: FaUserTie,
        title:"Expertise",
        desc:"Skilled professionals with extensive knowledge.",
    },
    {
        id:2,
        Icon: FaTools,
        title:"Comprehensive Services",
        desc:"Maintenance, repairs, upgrades, and consultations.",
    },
    {
        id:3,
        Icon: FaHeart,
        title:"Customer-Centric",
        desc:"Prioritising client needs and exceeding expectations.",
    },
    {
        id:4,
        Icon: FaClock,
        title:"24/7 Support",
        desc:"Round-the-clock emergency support.",
    },

];

const title = "Why Choose Srimonitech?";

const ChooseUs = () => { 
  return (
    <section className='mt-10 p-4 sm:p-5 md:p-6'>
       <h2 className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-5'>{title}</h2>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7'>
          {
           points.map(({ id, Icon, title, desc })=>(
                 <div className='' key={id}>
                    <div className="flex flex-col items-center h-full shadow-2xl rounded-2xl p-4 sm:p-3 xl:p-4 bg-teal-100">
                        <div className="w-15 h-15 bg-plum-600 flex items-center justify-center rounded-full mb-3">
                            <Icon className="text-white text-xl"/>
                        </div>
                        <h5 className='mb-1 font-bold'>{title}</h5>
                        <p className='text-center'>{desc}</p>
                    </div>
                 </div>
  
           ))
          }
       </div>
    </section>
  )
}

export default ChooseUs
