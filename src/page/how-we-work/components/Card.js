import React from 'react'

function Card({ data }) {


    let { id, title, description, classDirection } = data

    return (
        <div className={`container-timeline ${classDirection}`} data-aos="fade-up" data-aos-duration="1000">
            <div className="content-timeline">
                <div className="counter" data-aos="fade-up" data-aos-duration="1100">{id}</div>
                <h2 data-aos="fade-up" data-aos-duration="1200">{title}</h2>
                <p data-aos="fade-up" data-aos-duration="1300">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card