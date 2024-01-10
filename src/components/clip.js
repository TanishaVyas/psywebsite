import vid from "../image/clip.gif";
import vid1 from "../image/clip1.gif";
import vid2 from "../image/clip2.gif";

function Clip() {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around", // Adjust as needed
    alignItems: "center",
  };

  const gifContainerStyle = {
    marginBottom: "20px", // Adjust the padding between GIFs
    textAlign: "center",
  };

  const gifStyle = {
    width: "auto",
    height: "80vh",
  };

  return (
    <div style={containerStyle}>
      <div style={gifContainerStyle}>
        <img src={vid} alt="GIF Clip" style={gifStyle} />
        <p>3D visualisation of movement</p>
      </div>
      <div style={gifContainerStyle}>
        <img src={vid1} alt="GIF Clip" style={gifStyle} />
        <p>360 rotating 3d model of the joint</p>
      </div>
      <div style={gifContainerStyle}>
        <img src={vid2} alt="GIF Clip" style={gifStyle} />
        <p>Pain button which can mark the intensity of pain</p>
      </div>
    </div>
  );
}

export default Clip;
