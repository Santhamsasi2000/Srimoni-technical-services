import { LazyLoadImage } from 'react-lazy-load-image-component';

const title = "Technical & Maintenance Contracting Services";
const Services = () => {
  return (
    <section className='mt-15 sm:mt-18 p-4 sm:p-5 md:p-6'>
        <h2 
        className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-5 md:mb-6 mt-3'>
        {title}
       </h2>
        <div className='flex justify-center flex-wrap gap-5 md:gap-10'>
          {
            DataServices.map(({id,image,title})=>(
            <div className='xs:w-8/12 sm:w-5/12 lg:w-4/12' key={id} >
             <div className='border-teal-500 border-2 flex flex-col h-full rounded-xl overflow-hidden'>
              <LazyLoadImage className='w-full' src={image} effect='blur' threshold={200}/>
              <div className='p-3 bg-teal-100 h-full'>
                <p className='font-bold text-md'>{title}</p>
              </div>
             </div>
            </div>
            ))
          }
        </div>
    </section>
  )
}

export default Services

const DataServices = [
    {
        id:1,
        image:"/Images/Services/Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance.webp",
        title:"Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
    },
    {
        id:2,
        image:"/Images/Services/Electromechanical Equipment Installation and Maintenance - Dubai - Srimonitech.webp",
        title:"Electromechanical Equipment Installation and Maintenance",
    },
    {
        id:3,
        image:"/Images/Services/Satellite Receiving Equipment Installation & Maintenance.webp",
        title:"Satellite Receiving Equipment Installation & Maintenance",
    },
    {
        id:4,
        image:"/Images/Services/Floor & Wall Tiling Works.webp",
        title:"Floor & Wall Tiling Works",
    },
    {
        id:5,
        image:"/Images/Services/Carpentry & Wood Flooring Works.webp",
        title:"Carpentry & Wood Flooring Works",
    },
    {
        id:6,
        image:"/Images/Services/Plumbing & Sanitary Installation.webp",
        title:"Plumbing & Sanitary Installation",
    },
    {
        id:7,
        image:"/Images/Services/False Ceiling & Light Partitions Installation.webp",
        title:"False Ceiling & Light Partitions Installation",
    },
    {
        id:8,
        image:"/Images/Services/Electrical Fittings & Fixtures Repairing & Maintenance.jpeg",
        title:"Electrical Fittings & Fixtures Repairing & Maintenance",
    },
];

