import React from 'react'


import icon from "../../../assets/icon/Bug Shield.svg"

function Card() {
    return (
        <div class="serv card" data-aos="fade-up" data-aos-duration="1000">
            <img alt="img" src={icon} className='img-card' />
            <div class="content-serv content-card">
                <h1 data-aos="fade-up" data-aos-duration="1200">Dark Web Monitoring</h1>
                <p data-aos="fade-up" data-aos-duration="1300">With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks.</p>
            </div>
        </div>
    )
}

export default Card