import React from 'react';
import pic from '..//image//hands.png';

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
          height: '300px', // Height of the content box
          marginBottom: '20px',
          marginTop: '0', // Remove distance at the top
        }}>
          {/* Image (Left) */}
          <img src={pic} alt="Physio-Mize" style={{ width: '40%', height: '100%', maxWidth: '480px', borderRadius: '10px', marginRight: '5%' }} />

          {/* Right Box (Content) */}
          <div className="right-box" style={{
            backgroundColor: '#fff9c4',
            borderRadius: '10px',
            padding: '5%',
            width: '60%', // Adjusted width for the content
            height: '100%', // Height to occupy the entire content wrapper height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            overflowY: 'auto', // Add scrollbar when content overflows vertically
          }}>
            {/* Heading */}
            <h1 style={{
              fontSize: '24px', // Set a specific font size
              marginBottom: '20px',
              textAlign: 'left',
            }}>What Sets Us Apart</h1>

            {/* Updated Content */}
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
              Our team at Physio-Mize is driven by the idea of creating an affordable and easy-to-use joint angle measurement device. It's not just about technology; it's about bridging gaps in healthcare access and ensuring every individual receives tailored physiotherapy, irrespective of their background or location.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhysioMizeComponent;
