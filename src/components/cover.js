import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import physioImage from "../components/image-removebg-preview (90).png";

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
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    marginLeft: "auto",
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
    <Box sx={{ flexGrow: 1 }}>
      <div style={containerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {" "}
            {/* Updated Grid item */}
            <div className="text-content">
              <h1 style={physioMizeStyle}>PHYSIO-MIZE</h1>
              <p style={textStyle}>
                Optimizing Your Movement, Maximizing Your Life!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            {/* Updated Grid item */}
            <div className="image-content" style={imageStyle}>
              <img src={physioImage} alt="Physiotherapy Image" />
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Cover;
