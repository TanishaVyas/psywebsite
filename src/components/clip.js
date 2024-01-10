import vid from "../image/clip.gif";
import vid1 from "../image/clip1.gif";
import vid2 from "../image/clip2.gif";

function Clip() {
  return (
    <div style={{ height: "100vh" }}>
      <img
        src={vid}
        alt="GIF Clip"
        style={{ width: "100px", height: "auto" }}
      ></img>
      <img
        src={vid1}
        alt="GIF Clip"
        style={{ width: "100px", height: "auto" }}
      ></img>
      <img
        src={vid2}
        alt="GIF Clip"
        style={{ width: "100px", height: "auto" }}
      ></img>
    </div>
  );
}

export default Clip;
