import React from 'react'
import BTC from '../../assets/btc-img.png'
import { FiArrowUpRight } from 'react-icons/fi'
import './Featured.css'

const Featured = () => {
  return (
    <div id="featured">
      <div className="container">
        {/* Left Side*/}
        <div className="left">
          <div className="top">
          <img src={BTC} alt="/" />
          </div>
          <div>
            <h5>Bitcoin</h5>
            <p>$49,000</p>           
          </div>
          <span><FiArrowUpRight />2.5%</span>
          
        </div>

        {/* Right Side */}
        <div className="right">
          <h2>Explore top Crypto-s Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See akk available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

      </div>
    </div>
  )
}

export default Featured