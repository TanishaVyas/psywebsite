import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import physioImage from "../components/image-removebg-preview (90).png";
import logo from "..//image//logo.png";

const Cover = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e6e6fa",
    height: "100vh",
    margin: 0,
    padding: 0,
  };
  const imageContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Make the width 100% of the container
    height: "100%", // Make the height 100% of the container
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%", // Make the image take 100% of the container's height
    height: "auto",
    width: "auto", // Maintain the aspect ratio
  };
  const physioMizeStyle = {
    fontSize: "4em",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };
  const textStyle = {
    fontSize: "1em",
    fontFamily: "Arial, sans-serif",
    color: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box sx={{}} id="home">
      <div style={containerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="text-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Physiomize logo"
                  style={{
                     // Set the maximum height to 50% of the viewport width
                    height: window.innerWidth < 600 ? "50vw" : "20vw",

                    width: "auto",
                  }}
                />
              </div>
              <p style={textStyle}>
                Optimizing Your Movement, Maximizing Your Life!
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={imageContentStyle} // Apply the image content style
          >
            <div className="image-content" style={imageStyle}>
              <img
                src={physioImage}
                alt="Physiotherapy Image"
                style={imageStyle}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Cover;
