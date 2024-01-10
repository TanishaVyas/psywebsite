import React from "react";
import vid from "../image/clip.gif";
import vid1 from "../image/clip1.gif";
import vid2 from "../image/clip2.gif";
import { Grid, Typography } from "@mui/material";

function Clip() {
  const gifContainerStyle = {
    marginBottom: "20px", // Adjust the padding between GIFs
    textAlign: "center",
  };

  const gifStyle = {
    width: "auto",
    height: "60vh",
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="center"
    >
      {/* Video 1 */}
      <Grid item xs={12} sm={6} md={4} style={gifContainerStyle}>
        <img src={vid} alt="GIF Clip" style={gifStyle} />
        <Typography variant="body2">3D visualisation of movement</Typography>
      </Grid>

      {/* Video 2 */}
      <Grid item xs={12} sm={6} md={4} style={gifContainerStyle}>
        <img src={vid1} alt="GIF Clip" style={gifStyle} />
        <Typography variant="body2">
          360 rotating 3d model of the joint
        </Typography>
      </Grid>

      {/* Video 3 */}
      <Grid item xs={12} sm={6} md={4} style={gifContainerStyle}>
        <img src={vid2} alt="GIF Clip" style={gifStyle} />
        <Typography variant="body2">
          Pain button which can mark the intensity of pain
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Clip;
