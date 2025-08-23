const Accordian = ({title, content, isActive, toggle}) => {
    return (
      <>
        {
              <div className="accordian mb-5">
                 <div className="accordian-item">
                 <div className="accordian-title flex gap-5 justify-between items-center" onClick={toggle}>
                       <div className="fw-bold mb-3">{title}</div>
                       <div className={`text-teal-800 text-3xl ${isActive?"active":""}`}>{isActive?"-":"+"}</div>
                 </div>
                    {isActive && <div className="mb-2 text-sm">{content}</div>}
                    <div className="border border-teal-500"></div>
                 </div>
              </div>
        }
      </>
    )
}

export default Accordian
