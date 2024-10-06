import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#333',
        padding: '20px 0',
        color: '#fff',
        textAlign: 'center',
        marginTop: 'auto',  // it sticks to the bottom if content is short
      }}
    >
      <Container>
        <Typography variant="body1" gutterBottom>
          © 2024 YourWebsite. All Rights Reserved.
        </Typography>

        <Box>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/your-profile"
            target="_blank"
            sx={{ color: '#fff' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            sx={{ color: '#fff' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="https://twitter.com/your-profile"
            target="_blank"
            sx={{ color: '#fff' }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
