import React from "react";

const VideoLinks = () => {
  const youtubeVideoLink1 = "https://youtu.be/U-6ukEOxFuw?si=Z0eG_fLrYRlJLE1a";

  const wrapperStyle = {
    display: "flex",
    backgroundColor: "#F7F5FD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "0 20px",
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: "45px",
    marginBottom: "20px",
  };

  const videoContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  };

  const iframeStyle = {
    width: "100%",
    height: "315px",
  };

  const videoInfoStyle = {
    fontSize: "20px",
    width: "100%", // Adjusted for responsiveness
    marginTop: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={pageTitleStyle}>
        <b>DEMO VIDEO</b>
      </div>
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
        <div style={videoInfoStyle}>
          <p>
            <b>
              This video is about a project called Physio-Mize, which aims to
              bridge the gap between physiotherapists and remote patients.
              Traditional physiotherapy is an interactive and repetitive
              process, but it can be inconvenient and expensive for patients.
              Physio-Mize is a device that can be attached to any joint and
              helps measure the patient's range of motion.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoLinks;
