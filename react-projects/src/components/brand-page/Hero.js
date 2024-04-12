import React from 'react'

export const HeroSection = () => {
  return (
    <main className='hero container'>
        <div className='content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                SHOES.
            </p>

            <div className="hbutton">
                <button className='shop'>Shop Now</button>
                <button className='cat'>Category</button>
            </div>

            <div className='shopping'>
                <p>Also available on</p>
                
                <div className='brand-icons'>
                    <img src='/images/flipkart.png' alt="flipkart" width="50" height="25" />
                    <img src='/images/amazon.jpeg' alt='amazon' width="25" height="25" />
                </div>

            </div>
        </div>
        <div className='image'>
            <img src="/images/hawaii_chappal.jpg" alt='hero-chappal' width="700" height="700"/>
        </div>


    </main>
  )
}

