import React from 'react'

import icon from "../../../assets/icon/Shield Check.svg"


function Card() {
  return (
    <div className='card'>
      <div class="counter" data-aos="fade-up" data-aos-duration="1100"> <img src={icon} alt="img" className='icon' />
      </div>
      <div class="content-card">

        <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
        <p data-aos="fade-up" data-aos-duration="1300">Millions of devices are compromised using
          info-stealers malware, via cracked software,
          torrent files and what not.</p>
      </div>
    </div>
  )
}

export default Card