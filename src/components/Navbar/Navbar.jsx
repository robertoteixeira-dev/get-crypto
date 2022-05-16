import React, { useState } from 'react'
import { SiBitcoinsv } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#")
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



    return (
        <div className="header">
            <div className="container">
                <h1> <SiBitcoinsv /> Get<span className="primary">Crypto</span></h1>
                <nav className={click ? 'nav-menu active' : 'nav-menu'}>
                    <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : " "}>Home</a>
                    <a href="#featured" onClick={() => setActiveNav("#featured")} className={activeNav === "#featured" ? 'active' : " "}>Featured</a>
                    <a href="#earn" onClick={() => setActiveNav("#earn")} className={activeNav === "#earn" ? 'active' : " "}>Earn</a>
                    <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : " "}>Contact</a>
                </nav>

                <div className='btn-group'>
                    <button className='btn'>Light</button>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar