import React from 'react'
import logo from '../images/c.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='d-flex ' style={{
            background: "black", color: "white", justifyContent: "space-between", alignItems: "center",
            height: "250px",
        }}>

            <div className="logo"><img src={logo} height={120} width={180} alt="" /></div>

            <div className="seo">
                <h1 style={{ fontSize: "25px" }}>Our Services</h1>
                <p>Lorem, ipsum dolor.</p>
                <p>ipsum dolor.</p>
                <p>ipsum.</p>
                <p>Lorem, ipsum dolor.</p>

            </div>
            <div className="QL">
                <h1 style={{ fontSize: "25px" }}>Quick Links</h1>
                <p>About US</p>
                <p>Services</p>
                <p>Blogs</p>
                <p>Contact Us</p>
            </div>
            <div className="location">
                <h1 style={{ fontSize: "25px" }}>Address</h1>
                <p>Company</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem amet hic!</p>
                <p>info@company.org</p>
                <p>234-5656-33</p>
            </div>
        </div>
    )
}

export default Footer