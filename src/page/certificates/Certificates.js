import React from 'react'
import TitleSection from '../../components/TitleSection'

import Card from '../certificates/components/Card'

import img1 from "../../assets/certificates/image 6.jpg"
import img2 from "../../assets/certificates/image 6.jpg"
import img3 from "../../assets/certificates/image 6.jpg"
import img4 from "../../assets/certificates/image 6.jpg"
import img5 from "../../assets/certificates/image 6.jpg"
import img6 from "../../assets/certificates/image 6.jpg"


function Certificates() {

    let TitleObject = {
        titleSection: "our Certificates",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }

    let objectSection = [
        {
            id: "1",
            img: img1,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "2",
            img: img2,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "3",
            img: img3,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "1",
            img: img4,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "2",
            img: img5,
            title: "Dark Web Monitoring",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }, {
            id: "3",
            img: img6,
            title: "The Pervasive Threat",
            description: "With our automated monitoring of the surface, deep & dark web, your company assets are tracked 24/7 for data-leaks."
        }
    ]

    return (
        <div>
            <div className="container container-scroll" id='certificates'>
                <TitleSection TitleObject={TitleObject} />
                <div className="certificates-grid grid-style">


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

export default Certificates