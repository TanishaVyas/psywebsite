import React from "react";
import { Grid } from "@mui/material";
import coverImage from "./image-removebg-preview (89).png"; // Importing the image

const overlayImageStyle = {
  width: "40vw",
  height: "auto",
  marginTop: "-20vh",
};

const contentStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
  marginTop: "4rem",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
};

const textContainerStyle = {
  flex: 1,
  padding: "2vw",
  maxWidth: "50vw",
  marginTop: "-15rem",
};

const textBoxStyle = {
  backgroundColor: "transparent",
  padding: "2vw",
  boxShadow: "0 0.5vw 1vw rgba(0, 0, 0, 0.2)",
  borderRadius: "1vw",
};

const About = () => {
  return (
    <div id="ABOUT" style={{ position: "relative" }}>
      <Grid container justifyContent="space-evenly" style={contentStyle}>
        <div>
          <img src={coverImage} alt="Overlay Image" style={overlayImageStyle} />
        </div>
        <div style={textContainerStyle}>
          <div style={textBoxStyle}>
            <h1
              className="text-5xl font-bold font-sans text-blue-600"
              style={{
                textDecoration: "underline",
                justifyContent: "center",
                alignContent: "center",
                marginLeft: "170px",
              }}
            >
              About Us
            </h1>
            <p className="text-2xl font-sans text-white py-2">
              Skill Brewery is an internship initiative that facilitates the
              acquisition of essential skills for students and recent graduates
              to excel in their professional pursuits.
            </p>
            {/* Add more paragraphs as needed */}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default About;
