import React from "react";

const VideoLinks = () => {
  const youtubeVideoLink1 = "https://youtu.be/U-6ukEOxFuw?si=Z0eG_fLrYRlJLE1a";

  const wrapperStyle = {
    display: "flex",
    backgroundColor: "#F7F5FD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 5px", // Adjusted padding
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: "28px", // Decreased font size
    margin: "0", // Removed margin for spacing
  };

  const videoContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "9px",
    marginTop: "10px", // Adjusted top margin for spacing
  };

  const iframeStyle = {
    width: "100%",
    height: "300px",
  };

  const videoInfoStyle = {
    fontSize: "16px", // Decreased font size
    width: "100%", // Adjusted for responsiveness
    marginTop: "0px",
    overflowY: "auto", // Added to enable vertical scrolling
    maxHeight: "300px", // Max height for text box
    lineHeight: "1.4", // Adjusted line height
  };

  return (
    <div style={wrapperStyle}>
      <h2 style={pageTitleStyle}>DEMO VIDEO</h2>
      <div style={videoContainerStyle}>
        <div style={{ width: "100%" }}>
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
        <div style={{ ...videoInfoStyle, maxHeight: "300px" }}>
          <p>
            This video is about a project called Physio-Mize, which aims to
            bridge the gap between physiotherapists and remote patients.
            Traditional physiotherapy is an interactive and repetitive
            process, but it can be inconvenient and expensive for patients.
            Physio-Mize is a device that can be attached to any joint and
            helps measure the patient's range of motion.
            {/* Add more content here if needed */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoLinks;
