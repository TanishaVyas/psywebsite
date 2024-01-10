import React from "react";

const pageTitleStyle = {
  textAlign: "left",
  fontSize: "45px",
  marginBottom: "20px",
  marginLeft: "20px",
};

const contactContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  fontSize: "45px",
  marginBottom: "20px",
  marginRight: "20px", // Adjusted to add margin on the right
};

const iconContainerStyle = {
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
};

function ContactUS() {
  return (
    <div style={{ backgroundColor: "#FCFAF5" }}>
      <div style={pageTitleStyle}>About Us</div>
      <div style={{ ...pageTitleStyle, fontSize: "20px" }}>
        <p>
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
        </p>
      </div>
      <div style={contactContainerStyle}>
        <div style={pageTitleStyle}>Contact</div>
        <div style={{ display: "flex" }}>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "5px", fontSize: "15px" }}>
              <b>Email</b>
            </div>
            <span style={{ marginLeft: "5px", fontSize: "15px" }}>
              yash.parkhi.btech2022@sitpune.edu.in
            </span>
          </div>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "5px", fontSize: "15px" }}>
              <b>Phone</b>
            </div>
            <span style={{ marginLeft: "5px", fontSize: "15px" }}>
              +91 1234567890
            </span>
          </div>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "5px", fontSize: "15px" }}>
              <b>Linkden</b>
            </div>
            <span style={{ marginLeft: "5px", fontSize: "15px" }}>
              1234567890
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
