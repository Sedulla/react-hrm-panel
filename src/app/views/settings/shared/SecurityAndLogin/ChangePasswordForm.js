import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import { ReactComponent as KeyIcon } from '../../../../assets/profile.key-icon.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  PasswordFormContainer,
  FormHeader,
  TextBox,
  PasswordFormCloseButton,
  PasswordFormSaveButton,
  FormInputsGroup,
  FormContent,
  FormFooter,
} from '../../../../styles/Settings.styled';

export const ChangePasswordForm = ({ isHiddenForm, setIsHiddenForm }) => {
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
        <PasswordFormContainer>
          <FormHeader>
            <KeyIcon sx={{ color: '#9E9E9E' }} /> {/* bug: change svg color */}
            <TextBox>
              <Typography sx={{ fontSize: '16px' }}>
                Şifrəni dəyişdir
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#757575' }}>
                Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
                etmək yaxşı fikirdir
              </Typography>
            </TextBox>
          </FormHeader>

          <FormContent>
            <FormInputsGroup>
              <FormControl variant="outlined">
                <InputLabel htmlFor="current-password">Cari şifrə</InputLabel>
                <OutlinedInput
                  sx={{ width: 542 }}
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
                        onClick={() =>
                          handleClickShowPassword('currentPassword')
                        }
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

              <FormFooter>
                <PasswordFormSaveButton>Yadda Saxla</PasswordFormSaveButton>
                <PasswordFormCloseButton
                  onClick={() => setIsHiddenForm(!isHiddenForm)}
                >
                  Bağla
                </PasswordFormCloseButton>
              </FormFooter>
            </FormInputsGroup>
          </FormContent>
        </PasswordFormContainer>
      </Grid>
    </>
  );
};
