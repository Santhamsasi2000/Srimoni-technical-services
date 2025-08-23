import "./Direction.css";
const Direction = () => {
  return (
    <>
      <p className="primary-subtitle text-start mb-4">Directions</p>
      <div className='direction-border'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9104941279606!2d80.1773154732816!3d13.04136901334848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c7433461b1%3A0xe97f95ce9db03bf9!2sLogica%20Training%20School%20%7C%20Aviation%20Academy%20in%20Chennai%20%7C%20Airhostess%20Training%20%7C%20Aviation%20Diploma%20Courses%20%7C%20Ground%20Staff!5e0!3m2!1sen!2sin!4v1752031657286!5m2!1sen!2sin" className='direction w-100'></iframe>
      </div>
    </>
  )
}

export default Direction
