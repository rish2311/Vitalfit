import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#653b46', p: 3, mt: '40px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <a href="https://www.linkedin.com/in/sneha-gupta-239aa1201/" target="_blank" rel="noreferrer">
          <LinkedIn sx={{ color: 'pink', mr: 1 }} />
        </a>
        <a href="https://github.com/Snehagupta1907" target="_blank" rel="noreferrer">
          <GitHub sx={{ color: 'pink', mx: 1 }} />
        </a>
        <a href="https://www.instagram.com/sneha_19_07/" target="_blank" rel="noreferrer">
          <Instagram sx={{ color: 'pink', ml: 1 }} />
        </a>
      </Box>
      <Typography variant="body2" color="white" align="center">
        &copy; {new Date().getFullYear()} VitalFit. All rights reserved.
      </Typography>
      <Typography variant="body2" color="white" align="center">
        Made by Sneha Gupta
      </Typography>
    </Box>
  );
};

export default Footer;
