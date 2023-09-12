import React from 'react'


function Card({ data }) {
    
  let { img, title, description } = data

    return (
        <div className="serv card" data-aos="fade-up" data-aos-duration="1000">
            <div className='img-div-certificates' >
            <img alt="img" src={img}  />

            </div>
            <div className="content-serv content-card">
                <h1 data-aos="fade-up" data-aos-duration="1200">{title}</h1>
                <p data-aos="fade-up" data-aos-duration="1300">{description}</p>
            </div>
        </div>
    )
}

export default Card