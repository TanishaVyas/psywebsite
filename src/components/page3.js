import React, { useState, useEffect } from "react";
import pic from "..//image//pic3.png";

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

class PhysioMizeComponent extends React.Component {
  render() {
    const fontSizeHeading = window.innerWidth < 600 ? "3vw" : "2vw";
    const fontSizeParagraph = window.innerWidth < 600 ? "2.65vw" : "1.2vw";

    return (
      <div className="content" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:window.innerWidth < 600 ? "40vw" : "30vw",
        padding: '5%',
        marginBottom: window.innerWidth < 600 ? "65px" : "0px"
      }}>
        <div className="content-wrapper" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          height: window.innerWidth < 600 ? "250px" : "300px",
                  }}>
          {/* Left Box (Content) */}
          <div className="left-box" style={{
            backgroundColor: '#fff9c4',
            borderRadius: '10px',
            padding: '5%',
            width: '80%',
            height: '100%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}>
            {/* Heading */}
            <h1 style={{
              fontSize: fontSizeHeading,
              marginBottom: '20px',
              textAlign: 'left',
            }}>How we make a Difference</h1>

            {/* Paragraphs */}
            <p style={{ fontSize: fontSizeParagraph, marginBottom: 0 }}>
              With high-precision sensors and an intuitive app interface, we enable patients to actively participate in their recovery. Real-time data transmission and pain localization features empower physiotherapists to craft personalized treatment plans. 
              The data is remotely sent to the physiotherapist for further analysis.
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
