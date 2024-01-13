import React from "react";

const VideoLinks = () => {
  const youtubeVideoLink1 = "https://youtu.be/U-6ukEOxFuw?si=Z0eG_fLrYRlJLE1a";

  const wrapperStyle = {
    display: "flex",
    backgroundColor: "#F7F5FD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 15px", // Adjusted padding
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: window.innerWidth < 600 ? "5vw" : "3vw", // Decreased font size
    margin: "0", // Removed margin for spacing
  };

  const videoContainerStyle = {
    display: "flex", // Updated to flex for horizontal layout
    marginTop: "15px", // Adjusted top margin for spacing
    marginBottom: window.innerWidth < 600 ? "25px" : "40px", // Adjusted bottom margin for spacing
    padding: "0px", // Added padding
  };

  const videoStyle = {
    width: "50%", // Set width to 50% for the video container
    marginRight:  window.innerWidth < 600 ? "10px" : "6vw",
    marginLeft:  window.innerWidth < 600 ? "10px" : "6vw", // Added right margin for spacing
  };

  const iframeStyle = {
    width: "100%",
    height: "300px",
  };

  const videoInfoStyle = {
    flex: 1, // Let the info container take the remaining width
    fontSize: window.innerWidth < 600 ? "3vw" : "1.2vw" ,
       marginLeft: "10px", // Added left margin for spacing
    maxHeight: "300px", // Max height for text box
    lineHeight: "1.4", // Adjusted line height
    padding: "0px", // Added padding
    overflowY: "hidden", // Hide overflow and prevent scrolling
  };

  return (
    <div id="demo" style={wrapperStyle}>
      <h2 style={pageTitleStyle}>DEMO VIDEO</h2>
      <div style={videoContainerStyle}>
        <div style={videoStyle}>
          <iframe
            style={iframeStyle}
            src={youtubeVideoLink1.replace(
              "youtu.be/",
              "www.youtube.com/embed/"
            )}
            title="Embedded YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={videoInfoStyle}>
          <p>
            This video is about a project called Physio-Mize, which aims to
            bridge the gap between physiotherapists and remote patients.
            Traditional physiotherapy is an interactive and repetitive process,
            but it can be inconvenient and expensive for patients. Physio-Mize
            is a device that can be attached to any joint and helps measure the
            patient's range of motion.
            {/* Add more content here if needed */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoLinks;
