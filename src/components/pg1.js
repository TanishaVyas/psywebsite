import React, { useState, useEffect } from "react";
import pic from "..//image//picture.png";

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
    return (
      <div
        className="content"
        id="device"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            margin: "0 auto",
            height: window.innerWidth < 600 ? "60vw" : "25vw",
            marginBottom: "20px",
          }}
        >
          {/* Left Box (Content) */}
          <div
            className="left-box"
            style={{
              backgroundColor: "#fff9c4",
              borderRadius: "10px",
              padding: "5%",
              width: "70%",
              height: "100%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
              overflowY: "hidden",
              margin: "0",
            }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: window.innerWidth < 600 ? "3vw" : "2vw",
                marginBottom: "1vw",
                textAlign: "left",
              }}
            >
              About Physio-Mize
            </h1>

            {/* Paragraphs */}
            <p
              style={{
                fontSize: window.innerWidth < 600 ? "2.65vw" : "1.2vw",
                marginBottom: "1vw",
                textAlign: "left",
              }}
            >
              Physio-Mize revolutionizes physiotherapy with innovation and
              accessibility at its core. Our mission is to empower recovery
              journeys through tech-driven solutions.
            </p>
            <p
              style={{
                fontSize: window.innerWidth < 600 ? "2.65vw" : "1.2vw",
                marginBottom: "1vw",
                textAlign: "left",
              }}
            >
              Imagine a portable device that accurately measures joint movements
              while seamlessly connecting patients with physiotherapists,
              regardless of distance or resources. That's precisely what
              Physio-Mize aims to achieve.
            </p>
          </div>

          {/* Image (Right) */}
          <img
            src={pic}
            alt="Physio-Mize"
            style={{
              height: "100%",
              maxWidth: "100%",
              borderRadius: "10px",
              marginLeft: "5%",
            }}
          />
        </div>
      </div>
    );
  }
}

export default PhysioMizeComponent;

