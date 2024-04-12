import React, { useState } from 'react'

export const DiceRoll = ({rollDice, currentDice}) => {




  return (
    <div>

        <div className='maindice'
        onClick={rollDice}
        >
            <img src={`/images/dice_${currentDice}.png`} alt='1'/>
        </div>
      
    </div>
  )
}

