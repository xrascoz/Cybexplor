import React from 'react'
import TitleSection from '../components/TitleSection'

import userSvg from "../assets/icon/user.svg"
import phoneSvg from "../assets/icon/phone.svg"
import emailSvg from "../assets/icon/envelope.svg"
import messageSvg from "../assets/icon/message-dots.svg"

import { useState } from 'react'


function ContactUs() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [gmail, setGmail] = useState("")
    const [message, setMessage] = useState("")














    

    let TitleObject = {
        titleSection: "Contact Us",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }
    return (
        <div>

            <div className="container container-scroll" id='contact-us'>
                <TitleSection TitleObject={TitleObject} />


                <div className='form-container'>
                    <form  >
                        <div className='name-phone-div' >
                            <div className='div-img-input' data-aos="fade-up" data-aos-duration="1000">
                                <img src={userSvg} />
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className='div-img-input' data-aos="fade-up" data-aos-duration="1000">
                                <img src={phoneSvg} />
                                <input type="number" placeholder="Your Number" required />
                            </div>
                        </div>

                        <div className='div-img-input' data-aos="fade-up" data-aos-duration="1000">
                            <img src={emailSvg} />
                            <input type="email" placeholder="Your Email" required />
                        </div>

                        <div className='div-img-input textarea-div' data-aos="fade-up" data-aos-duration="1000">
                            <img src={messageSvg} />
                            <textarea placeholder="Your Message" ></textarea>
                        </div>

                        <button type="submit" className='main-button' data-aos="fade-up" data-aos-duration="1000" >send Message </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs