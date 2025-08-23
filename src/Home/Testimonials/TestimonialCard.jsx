import { TestimonialData } from "./TestimonialData"

const TestimonialCard = () => {
  return (
    <div className="row justify-content-center gy-4">
       {
        TestimonialData.map(({id,image,name,title,text})=>(
        <div className="col-sm-6">
          <div className="testimonial-bg p-3 p-md-4 p-lg-5 h-100" key={id}>
            <div className="d-flex gap-3">
                <img className="testimonial-img rounded-circle" src={image} alt="No-Image"/>
                <div>
                    <p className="mb-0 fw-semibold">{name}</p>
                    <p>{title}</p>
                </div>
            </div>
            <p>{text}</p>
          </div>
        </div>
        ))
       }
    </div>
  )
}

export default TestimonialCard
