import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import physioImage from "../components/image-removebg-preview (90).png";

const Cover = () => {
  const [fontSize, setFontSize] = useState("6vw");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 600 ? "6vw" : "13vw");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e6e6fa",
    height: "100vh",
    width: "auto",
    margin: 0,
    padding: 0,
  };

  const imageContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    width: "auto",
  };

  const physioMizeStyle = {
    fontSize: window.innerWidth < 896 ? "13.5vw" : "5vw",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0px",
  };

  const textStyle = {
    fontSize: window.innerWidth < 896 ? "1em" : "2em",
    fontFamily: "sans-serif",
    color: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box sx={{}} id="home">
      <div style={containerStyle}>
        <Grid container spacing={"0.5vw"}>
          <Grid item xs={12} md={6}>
            <div className="image-content" style={imageContentStyle}>
              <img
                src={physioImage}
                alt="Physiotherapy Image"
                style={imageStyle}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-content">
              <p style={physioMizeStyle}>
                <b>PHYSIO-MIZE</b>
              </p>
              <p style={textStyle}>
                Optimizing Your Movement, Maximizing Your Life!
              </p>
              <a href="#ures" style={{ textDecoration: 'none' }}>
                <Stack direction="row" spacing={2} sx={{ marginLeft: window.innerWidth < 600 ? "30vw" : "17vw", marginTop: window.innerWidth < 600 ? "13vw" : "5vw" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: "#ffffe0",
                      color: "black",
                      fontSize: window.innerWidth < 896 ? "1em" : "1.5em",
                      padding: window.innerWidth < 896 ? "1vw" : "2vw",
                      borderRadius: "10px"
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Cover;
