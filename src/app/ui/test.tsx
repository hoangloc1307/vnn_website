'use client';

import { useState } from 'react';

export default function Test() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      button
    </button>
  );
}
