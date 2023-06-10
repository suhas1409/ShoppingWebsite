import React from 'react'
import "./Footer.scss"

const Footer = () => {

  const date =  new Date();
  let currentYear = date.getFullYear();
  
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsum, ullam aliquam. Quam at non rerum nam est deserunt 
            consequuntur possimus! Ratione assumenda quidem officiis 
            nisi molestiae perspiciatis sint harum ut?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsum, ullam aliquam. Quam at non rerum nam est deserunt 
            consequuntur possimus! Ratione assumenda quidem officiis 
            nisi molestiae perspiciatis sint harum ut?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">STYLEHUB</span>
          <span className="copyright">
            © Copyright {currentYear}. All Right Reserved. 
          </span>
        </div>
        <div className="right">
          <img src="images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
