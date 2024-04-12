import React from 'react'

export const GameMenu = ({toggle}) => {
  return (
    <div className='menu'>
        <div className='dices'>
            <img src='/images/dices.png' alt='dices'/>
        </div>

        <div className='text'>
            <h1>DICE GAME</h1>
            <button className='play' onClick={toggle}>
                Play Now
            </button>

        </div>
      
    </div>
  )
}

