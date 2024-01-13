import React, { useState, useEffect } from 'react';

const WindowSizePrinter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
};

export default WindowSizePrinter;
