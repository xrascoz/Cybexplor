import React from 'react'
import TitleSection from '../../components/TitleSection'
import Card from "./components/Card"


function HowWeWork() {

    let TitleObject = {
        titleSection: "how work",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }

    let objectSection = [
        {
            id: "1",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "left-timeline"
        }, {
            id: "2",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "right-timeline"
        }, {
            id: "3",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "left-timeline"
        }, {
            id: "4",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "right-timeline"
        }, {
            id: "5",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "left-timeline"
        }, {
            id: "6",
            title: "The Pervasive Threat",
            description: "Hackers publish compromised devices stolen credentials in their exclusive market places at various platforms.",
            classDirection: "right-timeline"
        },
    ]

    return (
        <div>
            <div className="container container-scroll" id='how-work'>

                <TitleSection TitleObject={TitleObject} />

                <div className="timeline">

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

export default HowWeWork