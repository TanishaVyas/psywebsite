import React from 'react';
import physioImage from '../components/image-removebg-preview (90).png';

const Cover = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6e6fa', // Light purple color
  };
  const imageStyle = {
    maxWidth: '100%', /* Adjust the image width as needed */
    height: 'auto', 
    marginLeft: '-100px', 
  };

  const physioMizeStyle = {
    fontSize: '4em', 
    fontFamily: 'Arial, sans-serif',
    marginLeft: '100px',
  };
  const textStyle = {
    fontSize: 'em', 
    fontFamily: 'Arial, sans-serif',
    marginLeft: '100px',
    color: 'grey'
  };

  return (
    <div style={containerStyle}>
      <div className="text-content">
        <h1 style={physioMizeStyle}>PHYSIO-MIZE</h1>
        <p style={textStyle}>Optimizing Your Movement, Maximizing Your Life!</p>
      </div>
      <div className="image-content" style={imageStyle}>
        <img src={physioImage} alt="Physiotherapy Image" />
      </div>
    </div>
  );
};

export default Cover;
