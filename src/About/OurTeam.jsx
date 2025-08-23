import { LazyLoadImage } from "react-lazy-load-image-component";

const OurTeam = () => {
  return (
    <section>
       <h2 className="text-center mt-6 mb-5 text-plum-800 text-2xl font-bold">Our Team</h2>
       <div className="flex gap-x-10 flex-wrap justify-center gap-y-5">
          {
           teamMembers.map(({ id, img, name, position })=>(
            <div className="w-full sm:w-5/12" key={id}>
               <div className="shadow d-flex flex-column align-items-center p-3">
                 <LazyLoadImage src={img} className="director-img mb-2"/>
                 <p className="fw-bold fs-5">{name}</p>
                 <p className="fw-bold fs-5">{position}</p>
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
    img: "/About/team-image.jpg",
    name: "Srikanth Murugan",
    position: "Founder & CEO",
  },
  {
    id: 2,
    img: "/About/team-image.jpg",
    name: "Partha Sarathi",
    position: "Manager",
  },
];
