import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

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
    <div>
      <div style={pageTitleStyle}>About Us</div>
      <div style={{ ...pageTitleStyle, fontSize: "30px" }}>
        <p>gyuhiolkjtyuikmnjgyujikmbghjmnvbn</p>
      </div>
      <div style={contactContainerStyle}>
        <div>Contact</div>
        <div style={{ display: "flex" }}>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "5px", fontSize: "15px" }}>Email</div>
            <span style={{ marginLeft: "5px", fontSize: "15px" }}>
              yash.parkhi.btech2022@sitpune.edu.in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
