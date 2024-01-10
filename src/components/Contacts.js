import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Contacts() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        height: "100px", // Set the height of the footer
        width: "100%", // Take up the full width
        padding: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row", // Add padding for better spacing
      }}
    >
      <h3 sx={{ textWrap: "nowrap" }}>Contact Us</h3>
      <div
        style={{
          color: "black",
          display: "flex",
          height: "100px", // Set the height of the footer
          width: "100%", // Take up the full width
          padding: "10px", // Add padding for better spacing
        }}
      >
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black", padding: "8px" }}
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black", padding: "8px" }}
        >
          <PhoneIcon fontSize="large" />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black", padding: "8px" }}
        >
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Contacts;
