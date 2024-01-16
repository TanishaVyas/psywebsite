import React from "react";
import Tilt from "..//image//tiltss.png";

const imageStyles = {
  display: "block",
  margin: "auto",
  height:"100%", 
  width:"auto"// Adjust the width as needed
};

const App = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <img src={Tilt} alt="Tilt Image" style={imageStyles} />
    </div>
  );
};

export default App;
