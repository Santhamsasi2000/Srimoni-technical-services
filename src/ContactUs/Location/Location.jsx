import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const location = "Office 11, B6 Block, Burj Nahar Complex Deira - Dubai";
const email = "info@srimonitech.com";
const mobile = "054 245 8604";
const whatsapp = "971 542458604";
const whatsappLink = "https://api.whatsapp.com/send?phone=971542458604";
const instagram = "mr_dubai_tamil";
const instagramLink = "https://www.instagram.com/mr_dubai_tamil?utm_source=qr";
const linkedIn = "Srikanth Murugan";
const linkedLink = "https://www.linkedin.com/in/srikanth-murugan-b2070a369/";
const twitter = "Srikanth@srimonitech";
const twitterLink = "https://x.com/srimonitech";

const Location = () => {
  return (
    <section>
      <h2 className="text-teal-800 text-xl sm:text-2xl font-bold mb-5">Contact Info</h2>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-900 bg-teal-200 p-3 rounded-full text-lg">
          <SlLocationPin />
        </i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="email text-decoration-none text-dark lh-lg"
        >
          <span>
            {location}
          </span>
        </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <IoMailOpenOutline />
        </i>
        <a
          href={`mailto:${email}`}
          className="email text-decoration-none text-dark"
        >
          {email}
        </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <LuPhoneCall />
        </i>
             <a
              href={`tel:${mobile}`}
              className="email text-decoration-none text-dark text-primary"
            >
              {mobile}
            </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <FaWhatsapp />
        </i>
         <a
          href={whatsappLink}
          className="email text-decoration-none text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {whatsapp}
        </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <FaInstagram />
        </i>
         <a
          href={instagramLink}
          className="email text-decoration-none text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagram}
        </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <FaXTwitter/>
        </i>
         <a
          href={twitterLink}
          className="email text-decoration-none text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitter}
        </a>
      </div>
      <div className="flex gap-3 mb-6 items-center">
        <i className="text-plum-800 bg-teal-200 p-3 rounded-full text-lg">
          <FaLinkedinIn />
        </i>
         <a
          href={linkedLink}
          className="email text-decoration-none text-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedIn}
        </a>
      </div>
    </section>
  );
};

export default Location;
