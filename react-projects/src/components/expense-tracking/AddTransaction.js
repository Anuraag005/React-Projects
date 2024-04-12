import React from 'react';

export const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <div className='line2'></div>
      <form id="form" className="transaction-form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <small>(negative - expense, positive - income)</small>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
