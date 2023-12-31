import React from 'react'
import TitleSection from '../../components/TitleSection'

import icon1 from "../../assets/icon/Chip Shield.svg"
import icon2 from "../../assets/icon/Cloud Lock.svg"
import icon3 from "../../assets/icon/Incognito.svg"
import icon4 from "../../assets/icon/Firewall.svg"
import icon5 from "../../assets/icon/Browser Protection.svg"
import icon6 from "../../assets/icon/Bug Shield.svg"


import Card from './components/Card'

function ServicesSection() {


    let TitleObject = {
        titleSection: "Our Services",
        titleMain: "The Most important services",
        titleGradient: "we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities, you can manageyour business in one secure platform.",
    }

    let objectSection = [
        {
            id: "1",
            img: icon1,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "2",
            img: icon2,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "3",
            img: icon3,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "4",
            img: icon4,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "5",
            img: icon5,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "6",
            img: icon6,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        },
    ]

    return (
        <div>
            <div className='container container-scroll' id='services'>
                <TitleSection TitleObject={TitleObject} />
                <div className="services-grid grid-style" >

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
    )
}

export default ServicesSection