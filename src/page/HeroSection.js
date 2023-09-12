import React from 'react'
import CirclePng from "../assets/element/circle.png"
function HeroSection() {
    return (

        <main className="main-sec sec">
            <div className="container">
                <div className='main-contact'>
                    <div className="h1-text-div">
                        <h1 className="h1-text " data-glitch="Dark Entry" data-aos="fade-up" data-aos-duration="1000">
                            <span className="color-text">
                                Cybexplor</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="1100"> Cybexplor is a Breach Notification & Dark Web
                            monitoring platform. We help startups & enterprises
                            to prevent data breaches before it happens, using our Hybrid technique of combining AI & Human
                            Intelligence.
                        </p>
                    </div>
                    <a className='main-button' href="#contact-us" data-aos="fade-up" data-aos-duration="1000">
                        Contact Us
                    </a>
                </div>
                <a href='#services'>
                    <lord-icon
                        src="https://cdn.lordicon.com/wtfdpwey.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#f05255"
                        style={{ width: '120px', height: '250px' }}
                    >
                    </lord-icon>
                </a>
            </div>
            <img src={CirclePng} alt="earth.png" className="earth-img" />

        </main>
    )
}

export default HeroSection