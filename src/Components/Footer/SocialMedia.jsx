import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { label } from "framer-motion/client";
import { LazyLoadImage } from "react-lazy-load-image-component";

const socialMedia = [
  {
    id: 1,
    link: "https://api.whatsapp.com/send?phone=6384379814",
    icon: <SiWhatsapp />,
    label: "Connect on Whatsapp",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/sasikumarthefreelancer/",
    icon: <FaLinkedin />,
    label: "Connect on LinkedIn",
  },
  {
    id: 3,
    link: "https://www.instagram.com/pogowebsolutions/?hl=en",
    icon: <FaInstagram />,
    label: "Follow on Instagram",
  },
];

const SocialMedia = () => {
  return (
    <div>
      <h3 className='text-plum-900 font-bold 
      text-2xl mb-1 flex gap-2 items-center uppercase'>
        {/* <LazyLoadImage src="/Images/Home/changed-logo.jpg" className="w-7 h-7"/> */}
        Srimoni
        </h3>
      <p className="mb-1">Technical Services LLC</p>
      <p className="mb-2 sm:mb-4 italic">"Your One-Stop Solution for All Technical Needs!"</p>
      <div className="flex gap-3">
      {
        socialMedia.map(({ id, link, icon })=>(
        <div className='flex gap-4' key={id}>
            <a className='bg-plum-600 text-white p-3 rounded-full' href={link} 
            target='_blank'  rel="noopener noreferrer" aria-label={label}>{icon}</a>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default SocialMedia
