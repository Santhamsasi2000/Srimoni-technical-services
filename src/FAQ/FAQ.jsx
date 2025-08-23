import "./FAQ.css";
import Accordian from './Accordian'
import { FaqData } from "./FaqData";
import { useState } from "react";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
     <section className="mt-15 sm:mt-18 p-4 sm:p-5 md:p-6">
       <h2 
        className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-5 md:mb-6 mt-3'>
        Frequently Asked Questions
       </h2>
        {
          FaqData.map(({id,title,content})=>(
              <Accordian key={id} title={title} 
              content={content} isActive={activeId === id}
              toggle={()=> setActiveId(activeId === id? null :id)}/>
          ))
        }
    </section>
  )
}

export default FAQ
