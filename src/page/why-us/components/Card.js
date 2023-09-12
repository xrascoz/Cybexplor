import React from 'react'

import iconDown from "../../../assets/icon/arrow-down.svg"


function Card({ data }) {

  let { id, icon, title, description } = data


  let toggleCard = (e) => {


    let cardWhyUs = document.querySelectorAll(".card-why-us")

    cardWhyUs.forEach(element => {
      element.classList.remove("active")
    });
    
    e.currentTarget.classList.toggle("active")
  }


  return (
    <div className={id == 1 ? `card-why-us card-light active` : "card-why-us card-light"} data-aos="fade-up" data-aos-duration="1000" onClick={(e) => toggleCard(e)}>
      <div className="title-arrow">
        {title}
        <img src={icon} alt="arrow-down" />
      </div>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Card