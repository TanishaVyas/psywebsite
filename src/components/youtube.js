import React from "react";

const VideoLinks = () => {
  const youtubeVideoLink1 = "https://youtu.be/U-6ukEOxFuw?si=Z0eG_fLrYRlJLE1a";

  const videoContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  };

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh", // Set a minimum height for full-height centering
    padding: "0 20px", // Add padding to the sides
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: "45px",
    marginBottom: "20px",
  };

  // Responsive styles using media queries
  const responsiveVideoContainer = {
    width: "100%", // Make the video container 100% width
  };

  const responsivePageTitle = {
    fontSize: "30px", // Adjust font size for smaller screens
  };

  return (
    <div style={wrapperStyle}>
      <div style={pageTitleStyle}>DEMO VIDEO</div>
      <div style={{ ...videoContainerStyle, ...responsiveVideoContainer }}>
        <iframe
          width="100%" // Make the iframe 100% width
          height="315"
          src={youtubeVideoLink1.replace("youtu.be/", "www.youtube.com/embed/")}
          title="Embedded YouTube Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoLinks;
