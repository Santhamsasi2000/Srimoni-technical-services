import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const place = "Office 11, B6 Block, Burj Nahar Complex Deira – Dubai";
// const placeUrl = "https://www.google.com/maps?s=web&lqi=ChlzYWJhcmkgaG9zcGl0YWwgc2l2YWdhbmdhSOyI1eHxqoCACFotEAAQARgAGAEYAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYSoGCAIQABABkgEIaG9zcGl0YWyqAU0KCC9tLzBocG5yEAEyIBABIhyyZjJWDF-ROwNHEfOkh7tpMlSnLsdI9Varqux3Mh0QAiIZc2FiYXJpIGhvc3BpdGFsIHNpdmFnYW5nYQ&vet=12ahUKEwj71q_Yt_yKAxWbs1YBHV54ADgQ1YkKegQILBAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTVinVbF-gA7MSyfq0AxIhSX&daddr=4/106+sabari+hospital+lane+justice+rajasekaran+street.+sivagangai630561";
const email = "info@srimonitech.com";
const mobile1 = "+971 542458604"; 

const FooterContact = () => {
  return (
    <div className="flex flex-col items-stretch">
      <p className='text-plum-900 font-bold text-xl mb-2'>Contact Us</p>
      <div className="mb-2 flex gap-3 items-center">
      <i className="text-xl text-plum-600"><FaMapMarkerAlt /></i>
      <a
      target="_blank" 
      rel="noopener noreferrer">{place}</a>
      </div>
      <div className="mb-3 flex gap-3 items-center">
          <i className="text-xl text-plum-600"><IoIosMail /></i>
          <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="flex gap-3 items-center">
          <i className="text-xl text-plum-600"><FaMobileAlt /></i>
          <a href={`tel:${mobile1}`}>{mobile1}</a>
      </div>
    </div>
  )
}

export default FooterContact
