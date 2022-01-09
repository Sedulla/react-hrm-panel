import { useState } from 'react';
import {
  styled,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { ReactComponent as KeyIcon } from '../../../assets/profile.key-icon.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: '#388E3C',
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: theme.palette.common.black,
}));

export const ChangePasswordForm = ({ isHidden, setIsHidden }) => {
  const [values, setValues] = useState({
    currentPassword: { show: false, password: '' },
    newPassword: { show: false, password: '' },
    confirmNewPassword: { show: false, password: '' },
  });

  const handlePasswordChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: {
        ...values[field],
        password: event.target.value,
      },
    });
  };

  const handleClickShowPassword = (field) => {
    setValues({
      ...values,
      [field]: {
        ...values[field],
        show: !values[field].show,
      },
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid item lg={9}>
        <Box
          sx={{
            width: '820px',
            marginLeft: '25px',
            border: '1px solid #e0e0e0',
            backgroundColor: '#fafafa',
            borderRadius: '4px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: ' center',
              gap: '1rem',
              height: '60px',
              padding: '16px',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <KeyIcon sx={{ color: '#9E9E9E' }} /> {/* bug: change svg color */}
            <Box>
              <Box component="span" sx={{ fontSize: '16px' }}>
                Şifrəni dəyişdir
              </Box>
              <br />
              <Box component="span" sx={{ fontSize: '14px', color: '#757575' }}>
                Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
                etmək yaxşı fikirdir
              </Box>
            </Box>
          </Box>
          <br />

          <Box
            sx={{
              height: '228px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <FormControl variant="outlined">
              <InputLabel htmlFor="current-password">Cari şifrə</InputLabel>
              <OutlinedInput
                sx={{ width: '542px' }}
                id="current-password"
                required
                autoComplete="current-password"
                type={values.currentPassword.show ? 'text' : 'password'}
                value={values.currentPassword.password}
                onChange={handlePasswordChange('currentPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword('currentPassword')}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.currentPassword.show ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="new-password">Yeni şifrə</InputLabel>
              <OutlinedInput
                sx={{ width: '542px' }}
                id="new-password"
                required
                autoComplete="new-password"
                type={values.newPassword.show ? 'text' : 'password'}
                value={values.newPassword.password}
                onChange={handlePasswordChange('newPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword('newPassword')}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.newPassword.show ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="confirm-new-password">
                Yeni şifrənin təkrarı{' '}
                {/* bug: label text doesn't fit, must be fixed */}
              </InputLabel>
              <OutlinedInput
                sx={{ width: '542px' }}
                id="confirm-new-password"
                required
                autoComplete="confirm-new-password"
                type={values.confirmNewPassword.show ? 'text' : 'password'}
                value={values.confirmNewPassword.password}
                onChange={handlePasswordChange('confirmNewPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleClickShowPassword('confirmNewPassword')
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.confirmNewPassword.show ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box>
              <SaveButton>Yadda Saxla</SaveButton>
              <CloseButton onClick={() => setIsHidden(!isHidden)}>
                Bağla
              </CloseButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
