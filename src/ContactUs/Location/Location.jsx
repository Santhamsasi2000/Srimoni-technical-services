import { FaLinkedin, FaMapMarkerAlt, FaMobile } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Location = () => {
  return (
    <section>
      <h2 className="text-teal-800 text-xl sm:text-2xl font-bold mb-5">Contact Info</h2>

      {/* contact Info */}
      <div className="flex flex-col gap-6">
        {contactInfo.map(({ id, icon: Icon, text, link }) => (
          <div key={id} className="flex gap-3 items-center">
            <i className="text-plum-700 bg-teal-200 p-3 rounded-full">
              <Icon className="text-xl"/>
            </i>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline hover:text-teal-800"
              >
                <span>{text}</span>
              </a>
            ) : (
              <span className="text-gray-700">{text}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;

const contactInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    text: "Office 11, B6 Block, Burj Nahar Complex Deira - Dubai",
  },
  {
    id: 2,
    icon: IoMdMail,
    link: "mailto:info@srimonitech.com",
    text: "info@srimonitech.com",
  },
  {
    id: 3,
    icon: FaMobile,
    link: "tel:0542458604",
    text: "054 245 8604",
  },
  {
    id: 4,
    icon: IoLogoWhatsapp,
    link: "https://api.whatsapp.com/send?phone=971542458604",
    text: "971 542458604",
  },
  {
    id: 5,
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mr_dubai_tamil?utm_source=qr",
    text: "mr_dubai_tamil",
  },
  {
    id: 6,
    icon: FaSquareXTwitter,
    link: "https://x.com/srimonitech",
    text: "Srikanth@srimonitech",
  },
  {
    id: 7,
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/srikanth-murugan-b2070a369/",
    text: "Srikanth Murugan",
  },
];
