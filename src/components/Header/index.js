import React, { useState } from 'react'
import './style.css'

export const Header = (props) => {

 
  return (
    <>
    
      <header className={props.className}>

      <nav>
        <div className="logo">Your Logo</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    </>

  )

}


