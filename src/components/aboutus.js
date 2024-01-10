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
    <div style={{ backgroundColor: "#FCFAF5", minHeight: "100vh" }}>
      <div style={pageTitleStyle}>About Us</div>
      <div style={{ ...pageTitleStyle, fontSize: "20px" }}>
        <p>We are second year students at</p>
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
