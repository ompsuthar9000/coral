import React from 'react'
import Paymentlogo from "../../../assets/icons_payment.png"
import "./Footer.scss"
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import LogoFooter from "../../../assets/logo.png"
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_top">
     
        <div className='col col_footer_title'>
          <div className="logoFooter">
            <img src={LogoFooter} alt="" />
          </div>
          <p className='footer_title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus consequuntur eaque cupiditate </p>
          <div className="icons">
            <IoLogoFacebook />
            <IoLogoTwitter />
            <FaLinkedinIn />
            <FaDribbble />
          </div>
        </div>
        <div className='col'>
          <ul>
            <h3 class="list-heading">Catalog</h3>
            <li>Necklaces</li>
            <li>hoodies</li>
            <li>Jewelry Box</li>
            <li>t-shirt</li>
            <li>jacket</li>
          </ul>
        </div>
        <div className='col'>
          <ul>
            <h3 class="list-heading">AboutUs</h3>
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='col'>
          <ul>
            <h3 class="list-heading">Coustomer Services</h3>
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book an Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>

      </div>
      <div className="footer_bottom">
        <h3>&#169; 2022 coral,inc</h3>
        <img className='paymentlogo' src={Paymentlogo} alt="" />
        <p>Scoll to top &#8593;</p>
      </div>
    </div>
  )
}

export default Footer