import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Contacts() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px", // Set the height of the footer
        width: "100%", // Take up the full width
        padding: "10px", // Add padding for better spacin
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <h6>Contact Us</h6>
      </div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black", padding: "8px" }}
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black", padding: "8px" }}
      >
        <GitHubIcon fontSize="large" />
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
  );
}

export default Contacts;
