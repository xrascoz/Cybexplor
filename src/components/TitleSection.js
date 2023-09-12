import React from 'react'

function TitleSection({ TitleObject }) {
    

    let {titleSection , titleMain , titleGradient , description} = TitleObject
    return (
        <div>

            <div className="title-sec">
                <div className='div-text-line' data-aos="fade-up" data-aos-duration="1000" >
                    <h2 >{titleSection}</h2>
                    <span ></span>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000">{titleMain} <span className='gradient-span' >{titleGradient}</span></h3>
                <p data-aos="fade-up" data-aos-duration="1100">{description}</p>
            </div>

        </div>
    )
}

export default TitleSection