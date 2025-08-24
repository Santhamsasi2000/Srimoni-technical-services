import { NavLink } from 'react-router-dom'

const services = ["Routine Maintenance", "Emergency Repairs", "System Upgrades", "Air Filtration & Ventilation"];
const ServicesLinks = () => {
  return (
    <nav aria-label='Services'>
       <h3 className='text-plum-900 font-bold text-xl mb-2'>HVAC Services</h3>
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
