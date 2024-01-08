import React, { useState } from 'react';
import angle from '..//image//angle.png';
import cost from '..//image//cost.png';
import time from '..//image//time.png';
import pain from '..//image//pain.png';

const styles = {
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns in the grid
    gap: '20px', // Gap between grid items
    justifyContent: 'center', // Center content horizontally
    marginLeft: '50px', // Add left margin as needed
    marginTop: '2em', // Add 2 lines of margin at the top
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content vertically
    textAlign: 'center', // Center text
  },
  text: {
    margin: '5px 0',
    fontWeight: 'bold',
  },
  subtext: {
    fontStyle: 'italic',
    color: '#888',
  },
  icon: {
    width: '150px',
    height: '150px',
  },
};

const ImageList = () => {
  const [iconNames] = useState([
    'Precise Joint Angle Measurement',
    'Cost Efficient',
    'Time Saving',
    'Pain Localization and Intensity',
  ]);
  const [subTexts] = useState([
    'Accurate angle measurement with no human error',
    'The device is economical and requires little to no maintenance',
    'Saves travel time for the patients and helpful for those who are unable to travel',
    'Localizes pain and its intensity for further assessment',
  ]);
  const icons = [angle, cost, time, pain];

  return (
    <div style={styles.imageContainer}>
      {icons.map((icon, index) => (
        <div key={index} style={styles.textBox}>
          <img src={icon} alt={iconNames[index]} style={styles.icon} />
          <p style={styles.text}>{iconNames[index]}</p>
          <p style={styles.subtext}>{subTexts[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
