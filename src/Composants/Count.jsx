import React from 'react';
import { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(1000);

    const handleIncrement = () => {
        setCount(count + 100);
    }

    const handleDecrement =() => {
        setCount(count - 100);
    }
  return (
    <div>
        <h1> Count {count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}
