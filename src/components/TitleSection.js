import React from 'react'

function TitleSection({ TitleObject }) {
    

    let {titleSection , titleMain , titleGradient , description} = TitleObject
    return (
        <div>

            <div class="title-sec">
                <div className='div-text-line' >
                    <h2 data-aos="fade-up" data-aos-duration="1000">{titleSection}</h2>
                    <span data-aos="fade-up" data-aos-duration="1000"></span>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000">{titleMain} <span className='gradient-span' >{titleGradient}</span></h3>
                <p data-aos="fade-up" data-aos-duration="1100">{description}</p>
            </div>

        </div>
    )
}

export default TitleSection