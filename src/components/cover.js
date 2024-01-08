import React from 'react';
import physioImage from '../components/image-removebg-preview (90).png';

const Cover = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    /* Add any additional styling for the container */
  };

  const imageStyle = {
    maxWidth: '100%', /* Adjust the image width as needed */
    height: 'auto', /* Maintain aspect ratio */
    /* You can add additional styles here */
  };

  return (
    <div style={containerStyle}>
      <div className="text-content">
        <h1>PHYSIO-MIZE</h1>
        <p>Optimizing Your Movement, Maximizing Your Life!</p>
      </div>
      <div className="image-content">
        <img src={physioImage} alt="Physiotherapy Image" style={imageStyle} />
      </div>
    </div>
  );
};

export default Cover;
