import React, { useEffect, useState } from 'react';
import "./style.css";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className='count'>Счетчик: {count}</p>;
}

export default Timer;