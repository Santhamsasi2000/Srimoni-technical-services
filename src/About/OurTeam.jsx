import { LazyLoadImage } from "react-lazy-load-image-component";

const OurTeam = () => {
  return (
    <section>
       <h2 className="text-center mt-15 mb-5 text-plum-800 text-2xl sm:text-3xl font-bold ">Our Team</h2>
       <div className="flex gap-x-10 flex-wrap justify-center gap-y-5">
          {
           teamMembers.map(({ id, img, name, position })=>(
            <div className="" key={id}>
               <div className="shadow d-flex flex-column align-items-center">
                 <LazyLoadImage src={img} className="mb-2 w-80 h-auto aspect-[4/3]"/>
                 <div className="bg-teal-100 p-3">
                  <h4 className="fw-bold fs-5 text-center text-teal-800 font-bold">{name}</h4>
                  <p className="fw-bold fs-5 text-center">{position}</p>
                 </div>
               </div>
            </div>
           ))
          } 
       </div>
    </section>
  )
}

export default OurTeam

const teamMembers = [
  {
    id: 1,
    img: "/Images/About/srikanth-founder.jpg",
    name: "Srikanth Murugan",
    position: "Founder & CEO",
  },
  {
    id: 2,
    img: "/Images/About/parthasarathy-manager.jpeg",
    name: "Partha Sarathi",
    position: "Manager",
  },
];
