import React, { useState, useEffect } from "react";
import pic from "..//image//hands.png";

const PhysioMizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

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
        maxWidth: '1200px',
        margin: '0 auto',
        height:window.innerWidth < 600 ? "50vw" : "25vw",      
        marginTop: '0',
        marginBottom: window.innerWidth < 600 ? "95px" : "-75px"
      }}>
        {/* Image (Left) */}
        <img src={pic} alt="Physio-Mize" style={{ width: 'auto', 
        height: window.innerWidth < 600 ? "70%" : "90%",
        paddingTop:window.innerWidth < 600 ? "10%" : "0%",
         maxWidth: '480px', borderRadius: '10px', marginRight: '5%' }} />

        {/* Right Box (Content) */}
        <div className="right-box" style={{
          backgroundColor: '#fff9c4',
          borderRadius: '10px',
          padding: '5%',
          flex: '1',
          height: '100%',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          boxSizing: 'border-box',
          overflowY: 'hidden', // Set overflow to hidden
        }}>
          {/* Heading */}
          <h1 style={{
            fontSize: windowWidth < 600 ? "3vw" : "2vw",
            marginBottom: windowWidth < 600 ? '1vw' : '20px',
            textAlign: 'left',
          }}>What Sets Us Apart</h1>

          {/* Updated Content */}
          <p style={{
            fontSize: windowWidth < 600 ? "2.65vw" : "1.2vw",
            marginBottom: windowWidth < 600 ? '1vw' : '20px',
          }}>
            Our team at Physio-Mize is driven by the idea of creating an affordable and easy-to-use joint angle measurement device. It's not just about technology; it's about bridging gaps in healthcare access and ensuring every individual receives tailored physiotherapy, irrespective of their background or location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysioMizeComponent;
