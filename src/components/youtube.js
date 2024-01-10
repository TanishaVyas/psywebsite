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
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: "45px",
    marginBottom: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={pageTitleStyle}>DEMO VIDEO</div>
      <div style={videoContainerStyle}>
        <iframe
          width="560"
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
