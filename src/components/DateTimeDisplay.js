import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown text-bold'}>
     {value} {type}
     
    </div>
  );
};

export default DateTimeDisplay;
