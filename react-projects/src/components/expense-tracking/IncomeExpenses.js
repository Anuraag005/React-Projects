import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className='shadow-box'>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className='money-plus'>+Rs0.00</p>
                </div>

                <div>
                    <h4>Expense</h4>
                    <p className='money-minus'>-Rs0.00</p>
                </div>

            </div>
        </div>
    )
}

