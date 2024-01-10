import React from 'react';
import pic from "..//image//pic3.png";

class PhysioMizeComponent extends React.Component {
  render() {
    return (
      <div className="content" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
      }}>
        <div className="content-wrapper" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '1200px', // Adjust the maximum width based on your design requirements
          margin: '0 auto', // Center the content horizontally
          height: '300px', // Reduced the height to 300px for the content box
          marginBottom: '20px',
        }}>
          {/* Left Box (Content) */}
          <div className="left-box" style={{
            backgroundColor: '#fff9c4',
            borderRadius: '10px',
            padding: '5%',
            width: '70%', // Set a fixed width for the content
            height: '100%', // Set the height to occupy the entire content wrapper height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            // Hide any overflowing content
          }}>
            {/* Heading */}
            <h1 style={{
              fontSize: '24px', // Set a specific font size
              marginBottom: '20px',
              textAlign: 'left',
            }}>How we make a Difference</h1>

            {/* Paragraphs */}
            <p style={{ fontSize: '16px', marginBottom: 0 }}>
              With high-precision sensors and an intuitive app interface, we enable patients to actively participate in their recovery. Real-time data transmission and pain localization features empower physiotherapists to craft personalized treatment plans. 
            </p>
          </div>

          {/* Image (Right) */}
          <img src={pic} alt="Physio-Mize" style={{ height: '100%', maxWidth: '100%', borderRadius: '10px', marginLeft: '5%' }} />
        </div>
      </div>
    );
  }
}

export default PhysioMizeComponent;
