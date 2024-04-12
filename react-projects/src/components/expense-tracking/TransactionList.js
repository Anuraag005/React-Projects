import React from 'react'

export const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
        <div className='line1'></div>
        <ul className='list'>
            <li className='minus'>
                Cash <span>-Rs400</span><button className='delete-btn'>x</button>
            </li>
        </ul>
      
    </>
  )
}
