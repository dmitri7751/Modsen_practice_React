import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const buttonStyle = {
    backgroundColor: count > 10 ? 'red' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;
