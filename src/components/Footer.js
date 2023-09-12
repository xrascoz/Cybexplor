import React from 'react'
import logoImg from "../assets/logo/logo.svg"
import gitHubImg from "../assets/icon/github.svg"
import twitterImg from "../assets/icon/twitter.svg"
import linkedinInImg from "../assets/icon/linkedin-in.svg"

function Footer() {
    return (

        <footer>
            <div className="container">
                <div className="about-contact-parent">
                    <div className="logo-about-div">
                        <a href="#"><img src={logoImg} alt="logo.png" /></a>

                    </div>

                    <div className="contact-email">

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@darkentry.net" target="_blank"
                            rel="noopener noreferrer">info@darkentry.net</a>
                        <ul className="social-media">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"> <img
                                    src={gitHubImg} alt="icons" className="icon" /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"> <img
                                    src={twitterImg} alt="icons" className="icon" /></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"> <img
                                    src={linkedinInImg} alt="icons" className="icon" /></a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="div-about-footer">
                    <span>
                        <p> Email : <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales@Cybexplor.com"
                            target="_blank" rel="noopener noreferrer">sales@Cybexplor.com</a>
                            <p> Address: Spaces Hansgragt, Amsterdam, Netherlands</p>
                        </p>
                    </span>
                    <p className="about-website-footer-text">

                        Our mission is to improve cybersecurity in every company we touch.
                        Spaces Herengracht, Amsterdam, The Netherlands
                    </p>
                </div>



                <ul className="list-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Platform</a>

                    </li>
                    <li>
                        <a href="#">Solutions</a>

                    </li>
                    <li>
                        <a href="#">Services</a>

                    </li>
                    <li><a href="#">Company</a></li>
                </ul>
                <div className="all-rights">
                    <p>© 2021 Cybexplor. All rights reserved.</p>
                    <ul className="list-links">
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li> <a href="#">Cookies</a></li>
                        <li> <a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer