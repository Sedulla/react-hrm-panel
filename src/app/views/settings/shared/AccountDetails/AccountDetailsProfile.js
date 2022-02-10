import { Box, Typography } from '@mui/material';
import {
  ProfileContainer,
  ProfileAvatar,
} from '../../../../styles/Settings.styled';

export const AccountDetailsProfile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileAvatar alt="" src="/static/images/avatar/1.jpg" />
        <Box>
          <Typography>Aydın Abbasov Mustafa</Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: '#9E9E9E',
              marginTop: '8px',
            }}
          >
            Sürücü
          </Typography>
        </Box>
      </ProfileContainer>
    </>
  );
};
