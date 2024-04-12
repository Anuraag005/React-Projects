import React from 'react'
import './styles.css'
import { HeroSection } from './Hero'

export const BrandPage = () => {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
            <img src ="/images/nike" alt="logo"  width="100" height="50"/>
        </div>

        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
            
        </ul>

        <button>Login</button>



      </nav>

      <HeroSection/>
    </div>
  )
}