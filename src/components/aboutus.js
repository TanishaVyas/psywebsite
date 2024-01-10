import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";

const containerStyle = {
  backgroundColor: "#FCFAF5",
  borderRadius: "15px",
  padding: "50px",
  margin: "50px",
};

const sectionTitleStyle = {
  textAlign: "left",
  fontSize: "35px",
  marginBottom: "20px",
};

const contactContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontSize: "18px",
  marginTop: "20px",
};

const contactInfoStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
};

function ContactUS() {
  return (
    <Container style={containerStyle}>
      <div>
        <Typography variant="h4" style={sectionTitleStyle}>
          About us:
        </Typography>
        <Typography
          variant="body1"
          style={{ ...sectionTitleStyle, fontSize: "15px" }}
        >
          Our team is made up of second-year Symbiosis Institute of Technology
          students pursuing a Bachelor of Computer Science degree. Each member
          contributes a unique experience covering IoT, data analysis,
          Artificial Intelligence, web development, 3D modeling, game
          development, and app development, but they are all united by a shared
          desire for pioneering improvements in medicine. This diversified skill
          set serves as the foundation for our collaborative effort to design
          and manufacture new medical equipment. Driven by a desire to make a
          tangible difference in healthcare, we work together to develop
          solutions that push the limits of technical innovation in medicine.
        </Typography>
      </div>

      <div>
        <Typography variant="h4" style={sectionTitleStyle}>
          Contact us:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="subtitle1">
                <b>Email</b>
              </Typography>
              <Typography>yash.parkhi.btech2022@sitpune.edu.in</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="subtitle1">
                <b>Phone</b>
              </Typography>
              <Typography>+91 9348243932</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="subtitle1">
                <b>LinkedIn</b>
              </Typography>
              <Typography>
                https://www.linkedin.com/in/yash-parkhi-737773217/
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default ContactUS;
