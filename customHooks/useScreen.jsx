import { useState, useEffect } from 'react';

const defaultState = {
  width: 0,
  height: 0,
};

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const useScreen = () => {
  const [windowSize, setWindowSize] = useState(defaultState);

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useScreen;
