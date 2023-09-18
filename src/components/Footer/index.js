import React from 'react'
import './style.css'
/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
    <>
     <footer className={props.className}>
      <div className="footer-content">
        <p>&copy; 2023 Your Company</p>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
    </>
   )

 }