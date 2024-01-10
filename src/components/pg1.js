import React from 'react';
import pic from "..//image//pic1.png";

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
          height: '400px', // Fixed height for the content box
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
            overflow: 'hidden', // Hide any overflowing content
          }}>
            {/* Heading */}
            <h1 style={{
              fontSize: '24px', // Set a specific font size
              marginBottom: '20px',
              textAlign: 'left',
            }}>About Physio-Mize</h1>

            {/* Paragraphs */}
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            Physio-Mize revolutionizes physiotherapy with innovation and accessibility at its core. Our mission is to empower recovery journeys through tech-driven solutions.
            </p>
            <p style={{ fontSize: '16px', marginBottom: 0 }}>
              Imagine a portable device that accurately measures joint movements while seamlessly connecting patients with physiotherapists, regardless of distance or resources. That's precisely what Physio-Mize aims to achieve.
            </p>
          </div>

          {/* Image (Right) */}
          <img src={pic} alt="Physio-Mize" style={{ width: '30%', height: '100%', maxWidth: '300px', borderRadius: '10px', marginLeft: '5%' }} />
        </div>
      </div>
    );
  }
}

export default PhysioMizeComponent;
