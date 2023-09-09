import React from 'react'


import TitleSection from '../../components/TitleSection'
import Card from './components/Card'

function Achievement() {
    let TitleObject = {
        titleSection: "Achievement",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }
    return (
        <div>
            <div class="container">

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
                        <button className='main-button'  data-aos="fade-up" data-aos-duration="1000">
                        Contact Us
                    </button>
                    </dvi>
                    <div className='grid-style-one' >
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>










            </div>
        </div>
    )
}

export default Achievement