import { FaBullseye, FaEye } from "react-icons/fa";

const Vision = () => {
  return (
    <section className="flex gap-x-10 gap-y-5 sm:gap-y-6 flex-wrap justify-center mt-10 mb-5">
      {
        DataVision.map(({ id, icon, title, content })=>(
          <div className="w-full sm:w-5/12" key={id}>
            <div className="shadow-xl p-4 lg:p-5 h-full rounded-xl bg-teal-100">
                <div className="flex gap-2 items-center mb-3">
                    <i className="text-plum-600 text-2xl">{icon}</i>
                    <h3 className="text-plum-800 font-bold text-lg">{title}</h3>
                </div>
                <p>{content}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Vision

const DataVision = [
    {
        id: 1,
        icon: <FaBullseye/>,
        title: "Our Mission",
        content: "At Srimoni Tech, our mission is to deliver reliable, efficient, and sustainable technical solutions in HVAC, electrical fittings, and maintenance services. We are committed to ensuring customer satisfaction through quality workmanship, innovative practices, and timely support—building lasting relationships based on trust and professionalism.",
    },
    {
        id: 2,
        icon: <FaEye/>,
        title: "Our Vision",
        content: "Our vision is to be a leading technical service provider in Dubai, recognized for excellence, integrity, and innovation. We aim to create smarter, safer, and more comfortable living and working environments while setting new standards in service quality and customer care.",
    },
      ];
