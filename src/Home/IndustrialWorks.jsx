import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
// Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const title = "Industrial HVAC Systems in Action";
const smallDesc = "Take a closer look at our HVAC installations — engineered to ensure consistent temperature, clean airflow, and reduced operational costs across industries.";

const IndustrialWorks = () => {
  return (
    <section className="p-4 sm:p-5 md:p-6 mt-10">
       <h2 
        className='text-center text-plum-800 text-2xl sm:text-3xl font-bold mb-2'>
        {title}
       </h2>
       <p className='mb-5 sm:mb-6 text-center text-sm sm:text-base'>{smallDesc}</p>

       {/* Auto Carousel */}
       <Swiper
	        modules={[Autoplay]}
	        autoplay={{ delay: 1000, disableOnInteraction: false }}
	        spaceBetween={30}
	        slidesPerView={1}
	        breakpoints={{
	          400: { slidesPerView: 2 }, 
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }, 
	        }}
	        loop={true}
	      >
        {myWorks.map(({ id, img }) => (
          <SwiperSlide key={id}>
            <div className="flex justify-center">
              <LazyLoadImage src={img} className="w-full rounded-lg aspect-[1/1]" effect="blur" threshold={200}/>
            </div>
          </SwiperSlide>
        ))}
       </Swiper>
    </section>
  )
}

export default IndustrialWorks

const myWorks = [
  { id: 2, img: "/Images/Home/Works/2.webp" },
  { id: 4, img: "/Images/Home/Works/4.webp" },
  { id: 5, img: "/Images/Home/Works/5.webp" },
  { id: 6, img: "/Images/Home/Works/6.webp" },
  { id: 7, img: "/Images/Home/Works/7.webp" },
  { id: 8, img: "/Images/Home/Works/8.webp" },
  { id: 9, img: "/Images/Home/Works/9.webp" },
  { id: 10, img: "/Images/Home/Works/10.webp" },
  { id: 12, img: "/Images/Home/Works/12.webp" },
  { id: 13, img: "/Images/Home/Works/13.webp" },
  { id: 14, img: "/Images/Home/Works/14.webp" },
  { id: 15, img: "/Images/Home/Works/15.webp" },
  { id: 16, img: "/Images/Home/Works/16.webp" },
  { id: 17, img: "/Images/Home/Works/17.webp" },
  { id: 18, img: "/Images/Home/Works/18.webp" },
  { id: 21, img: "/Images/Home/Works/21.webp" },
  { id: 22, img: "/Images/Home/Works/22.webp" },
];

