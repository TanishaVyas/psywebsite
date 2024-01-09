import React, { useState } from "react";
import angle from "..//image//angle.png";
import cost from "..//image//cost.png";
import time from "..//image//time.png";
import pain from "..//image//pain.png";

const styles = {
  imageContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "space-evenly",
    margin: "2em auto", // Centered horizontally with auto margin
    padding: "0 20px", // Add padding for better spacing
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "10px", // Add margin between items
  },
  text: {
    margin: "5px 0",
    fontWeight: "bold",
  },
  subtext: {
    fontStyle: "italic",
    color: "#888",
  },
  icon: {
    width: "150px",
    height: "150px",
  },
};

const IconItem = ({ icon, name, subtext }) => (
  <div style={styles.textBox}>
    <img src={icon} alt={name} style={styles.icon} />
    <p style={styles.text}>{name}</p>
    <p style={styles.subtext}>{subtext}</p>
  </div>
);

const ImageList = () => {
  const [iconData] = useState([
    {
      name: "Precise Joint Angle Measurement",
      subtext: "Accurate angle measurement with no human error",
      icon: angle,
    },
    {
      name: "Cost Efficient",
      subtext: "The device is economical and requires little to no maintenance",
      icon: cost,
    },
    {
      name: "Time Saving",
      subtext:
        "Saves travel time for the patients and helpful for those who are unable to travel",
      icon: time,
    },
    {
      name: "Pain Localization and Intensity",
      subtext: "Localizes pain and its intensity for further assessment",
      icon: pain,
    },
  ]);

  return (
    <div style={styles.imageContainer}>
      {iconData.map((item, index) => (
        <IconItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ImageList;
