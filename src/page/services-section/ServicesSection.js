import React from 'react'
import TitleSection from '../../components/TitleSection'

import Card from './components/Card'

function ServicesSection() {


    let TitleObject = {
        titleSection: "Our Services",
        titleMain: "The Most important services",
        titleGradient: "we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities, you can manageyour business in one secure platform.",
    }


    return (
        <div>
            <div className='container'>
                <TitleSection TitleObject={TitleObject} />
                <div class="services-grid grid-style">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection