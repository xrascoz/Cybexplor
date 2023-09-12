import React from 'react'

import icon from "../../../assets/icon/Shield Check.svg"


function Card({ data }) {

  let { img, title, description } = data




  return (
    <div className='card' data-aos="fade-up" data-aos-duration="1100"  >
      <div className="counter" data-aos="fade-up" data-aos-duration="1100"> <img src={img} alt="img" className='icon' />
      </div>
      <div className="content-card">

        <h2 data-aos="fade-up" data-aos-duration="1200">{title}</h2>
        <p data-aos="fade-up" data-aos-duration="1300">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card