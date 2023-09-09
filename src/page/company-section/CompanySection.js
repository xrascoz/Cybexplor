import React from 'react'
import TitleSection from '../../components/TitleSection'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import company1 from "../../assets/company/company1.svg"

function CompanySection() {


    let TitleObject = {
        titleSection: "Company",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }

    return (
        <div>
            <div className="container">
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
                    </dvi>
                    <div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={3}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}

                            breakpoints={{
                                50: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 3,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1500: {
                                    slidesPerView: 3,
                                },
                            }}
                            data-aos="fade-up" data-aos-duration="1100"
                        >
                            <SwiperSlide>
                                <div className='grid-company' >
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid-company' >
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid-company' >
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid-company' >
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>
                                    <div className='company-div' >
                                        <img src={company1} />
                                        <p>xrasco</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanySection