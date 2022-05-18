import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import Crypto from '../../assets/bitcoin.gif'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">

        <div className="col col-1">
          <h1>Get<span className="primary">Crypto</span></h1>
          <span className="bar"></span>
          
          <div className="socials">
            <a href="/"><FaFacebook className="icon" /></a>
            <a href="/"><FaTwitter className="icon" /></a>
            <a href="/"><FaLinkedin className="icon" /></a>
          </div>

          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>

        </div>

        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>

        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>

      </div>

    </div>
  )
}

export default Footer