import React from 'react';

const Tracker = () => {
  return (
    <div>
      <div>
        <p className='monthly-budget-title'>Montly Budget limit</p>
        <p className='monthly-budget'>$4100</p>
      </div>
      <div>
        <p className='monthly-expanse'>Money - Spent</p>
        <p className='spent-amount'>$222</p>
      </div>
      <div>{/* progress bar*/}</div>
    </div>
  );
};

export default Tracker;
