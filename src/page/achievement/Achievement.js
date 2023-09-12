import React from 'react'


import icon1 from "../../assets/icon/Shield Check.svg"
import icon2 from "../../assets/icon/Star.svg"
import icon3 from "../../assets/icon/Messages.svg"

import TitleSection from '../../components/TitleSection'
import Card from './components/Card'

function Achievement() {
    let TitleObject = {
        titleSection: "Achievement",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }


    let objectSection = [
        {
            id: "1",
            img: icon1,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "2",
            img: icon2,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "3",
            img: icon3,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }
    ]

    return (
        <div>
            <div className="container container-scroll" id='achievement'>

                <TitleSection TitleObject={TitleObject} />

                <div className='grid-style-tow' >
                    <dvi className="explain-text" >
                        <h2 data-aos="fade-up" data-aos-duration="1100">
                            You do the busbusiness
                            We'll handle the money
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="1200">
                            Cybexplor is a Breach Notification & Dark Web monitoring platform. We help startups & enterprises to prevent data breaches before it happens, Dark Web monitoring platform. We help startups & enterprises to prevent data breaches before it happens Dark Web monitoring platform. We help startups & enterprises to prevent data breaches before it happens using our Hybrid technique of combining AI.
                        </p>
                        <a className='main-button' data-aos="fade-up" data-aos-duration="1000" href="#contact-us">
                            Contact Us
                        </a>
                    </dvi>
                    <div className='grid-style-one' >


                        {
                            objectSection.map((item) => {
                                return (
                                    <Card key={item.id} data={item} />
                                )
                            })
                        }

                    </div>
                </div>










            </div>
        </div>
    )
}

export default Achievement