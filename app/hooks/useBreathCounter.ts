import { useState, useRef } from 'react';

const useBreathCounter = () => {
  const initBreaths = 219404720;

  const [breaths, setBreaths] = useState(initBreaths);
  const countRef = useRef<any>();

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setBreaths((i: number) => i + 1);
    }, 1000);
  };

  return {
    breaths,
    handleStart,
  };
};

export default useBreathCounter;
