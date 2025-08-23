import React from 'react'
import { NavLink } from 'react-router-dom'

const services = ["Website Development", "SEO & Performance", "Website Maintenance"]
const ServicesLinks = () => {
  return (
    <nav aria-label='Services'>
       <h3 className='text-plum-900 font-bold text-xl mb-2'>Services</h3>
       <ul className='list-unstyled'>
        {
            services.map(( service, index )=>(
              <li key={index} className='mb-2'>
                <NavLink className="" aria-label={`Learn more about ${service}`}>{service}</NavLink>
              </li>
            ))
        }
       </ul>
    </nav>
  )
}

export default ServicesLinks
