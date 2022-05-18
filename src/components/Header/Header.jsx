import React from 'react'


import './Header.css'
import Crypto from '../../assets/bitcoin.gif'



const Header = () => {
  return (
    <div className="home">
      <div className="container">

        {/* Left Side */}

        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency with your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          
          <div className="input-container">
          <button className="btn">Connect Wallet</button>
            <input type="email" placejolder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
          
        </div>

        {/* Right Side */}
        <div className="right">
            <div className="img-container">
              <img src={Crypto} alt="" />
            </div>

        </div>

      </div>
    </div>
  )
}

export default Header