import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

export const AccountDetailsProfile = () => {
  return (
    <>
      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          padding: '35px',
          width: '252px',
          height: '195px',
        }}
      >
        <Avatar
          alt=""
          src="/static/images/avatar/1.jpg"
          sx={{ width: 64, height: 64, margin: '0 auto' }}
        />
        <Box sx={{ textAlign: 'center', marginTop: '14px' }}>
          <Typography>Aydın Abbasov Mustafa</Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: '5px',
              color: '#9E9E9E',
              fontSize: '0.875rem',
            }}
          >
            Sürücü
          </Typography>
        </Box>
      </Box>
    </>
  );
};
