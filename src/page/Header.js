import React from 'react'
import barsSortSvg from "../assets/icon/bars-sort.svg"
import logoSvg from "../assets/logo/logo.svg"

function Header() {
  return (
    <header>
        <div className="container">
            <a href="index.html" className="a-logo">
                <img src={logoSvg} alt="logo.png" />
            </a>

            <ul className="list-website">
                  <li className="list-ul-phone">
                      
                      Home
                  </li>
                <li className="list-ul-phone">Platform</li>
                <li className="list-ul-phone">Solutions</li>
                <li className="list-ul-phone">Services</li>
                <li className="list-ul-phone">Company</li>
                <li className="li-login"><a href="#" className="a-login"><span className="login-span">Login</span></a></li>
            </ul>

            <div className="button-div-header">
                <a className="default-button" href="#"> Contact Us</a>
                <img src={barsSortSvg} alt="bars-sort.svg" className="icon toggle" />
            </div>
        </div>
    </header>
  )
}

export default Header