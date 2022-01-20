import { useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { ReactComponent as KeyIcon } from '../../../assets/profile.key-icon.svg';
import { ReactComponent as EditIcon } from '../../../assets/profile.edit-icon.svg';
import { ChangePasswordForm } from './ChangePasswordForm';

export const SecurityAndLogin = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      {isHidden ? (
        <Grid item lg={9}>
          <Box
            sx={{
              width: '820px',
              marginLeft: '25px', 
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                height: '60px',
                padding: '16px',
                display: 'flex',
                alignItems: ' center',
                gap: '1rem',
              }}
            >
              <KeyIcon />
              <Box>
                <Box component="span" sx={{ fontSize: '16px' }}>
                  Şifrəni dəyişdir
                </Box>
                <br />
                <Box
                  component="span"
                  sx={{ fontSize: '14px', color: '#757575' }}
                >
                  Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
                  etmək yaxşı fikirdir
                </Box>
              </Box>
            </Box>
            <IconButton component="span" aria-label="change password">
              <EditIcon onClick={() => setIsHidden(!isHidden)} />
            </IconButton>
          </Box>
        </Grid>
      ) : (
        <ChangePasswordForm isHidden={isHidden} setIsHidden={setIsHidden} />
      )}
    </>
  );
};
