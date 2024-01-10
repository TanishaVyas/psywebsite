import React from "react";

const pageTitleStyle = {
  textAlign: "left",
  fontSize: "35px",
  marginBottom: "20px",
  marginLeft: "40px",
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
  padding: "50px",
};

const aboutUsContainerStyle = {
  backgroundColor: "#FCFAF5",
  borderRadius: "15px",
  padding: "50px",
  margin: "50px",
};

function ContactUS() {
  return (
    <div>
      <div style={aboutUsContainerStyle}>
      
        <div style={pageTitleStyle}>About us:</div>
        <div style={{ ...pageTitleStyle, fontSize: "15px" }}>
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
      </div>
      <div style={contactContainerStyle}>
      <div style={{ display: "flex" ,marginLeft:"100px"}}>
        <div style={pageTitleStyle}>Contact us:</div></div>
        <div style={{ display: "flex" ,marginRight:"50px"}}>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "50px", fontSize: "15px" }}>
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
              +91 9348243932
            </span>
          </div>
          <div style={iconContainerStyle}>
            <div style={{ marginLeft: "50px", fontSize: "15px" }}>
              <b>Linkden</b>
            </div>
            <span style={{ marginLeft: "50px", fontSize: "15px" }}>
            https://www.linkedin.com/in/yash-parkhi-737773217/
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
