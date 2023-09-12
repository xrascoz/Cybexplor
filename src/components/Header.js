import React from 'react'
import barsSortSvg from "../assets/icon/bars-sort.svg"
import logoSvg from "../assets/logo/logo.svg"

import { useState } from 'react'

function Header() {


    let [toggle, setToggle] = useState(false)


    let toggleFunction = () => {
        setToggle(!toggle)
    }


    return (
        <header>
            <div className="container">
                <a href="index.html" className="a-logo">
                    <img src={logoSvg} alt="logo.png" />
                </a>

                <ul className={toggle ? "list-website active" : "list-website"}>
                    <li className="list-ul-phone"  onClick={() => toggleFunction()}>
                        <a href="#" >Home</a>
                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>
                        <a href="#services" >Services</a>
                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>

                        <a href="#company" >Company</a>
                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>

                        <a href="#how-work" >How Work</a>
                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>

                        <a href="#achievement" >Achievement</a>

                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>

                        <a href="#certificates" >Certificates</a>

                    </li>
                    <li className="list-ul-phone" onClick={() => toggleFunction()}>

                        <a href="#why-us" >Why Us</a>
                    </li>
                </ul>

                <div className="button-div-header">
                    <a className="default-button" href="#contact-us" > Contact Us</a>
                    <img src={barsSortSvg} alt="bars-sort.svg" className="icon toggle" onClick={() => toggleFunction()} />
                </div>
            </div>
        </header>
    )
}

export default Header