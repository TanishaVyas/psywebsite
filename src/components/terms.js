import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function TermsAndConditionsModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the top
        height: '5vh',
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ marginTop: 'auto' }}>
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{ p: '8px 16px', m: 0 }}
        >
          Open Terms and Conditions
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%', // Set maximum width
            maxWidth: 600, // Limit maximum width
            maxHeight: '80vh', // Limit maximum height
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflowY: 'auto', // Enable vertical scroll when needed
            '@media (max-width: 600px)': {
              width: '95%', // Adjust width for smaller screens
            },
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Terms and Conditions
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
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
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default TermsAndConditionsModal;
