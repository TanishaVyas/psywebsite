import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function TermsAndConditionsModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open Terms and Conditions
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Set maximum width
            maxWidth: 600, // Limit maximum width
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            "@media (max-width: 600px)": {
              width: "95%", // Adjust width for smaller screens
            },
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Terms and Conditions
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography paragraph>
              The following terms and conditions govern your use of the
              physiotherapy and rehabilitation device ("Physio-mize"). By using
              the Device, you agree to these terms and conditions.
            </Typography>
            <ul>
              <li>
                The device is intended solely for personal physiotherapy and
                rehabilitation purposes.
              </li>
              <li>
                Your personal health data collected by the Device will be
                handled per the privacy policy, shared only with your
                physiotherapist.
              </li>
              <li>
                This device is an engineering sample and not a fully finished
                product.
              </li>
              <li>
                The device is permitted for use solely upon the recommendation
                of a physiotherapist.
              </li>
              <li>
                The creators may update or modify the Device and application
                without prior notice.
              </li>
              <li>
                The creators won't be responsible for any misuse/mishap of the
                project.
              </li>
            </ul>
            <Typography>
              Please read these terms and conditions carefully before using the
              Device. If you do not agree with any of these terms, do not use
              the Device.
            </Typography>
          </Box>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default TermsAndConditionsModal;
