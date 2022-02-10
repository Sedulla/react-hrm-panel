import { useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { ReactComponent as KeyIcon } from '../../../../assets/profile.key-icon.svg';
import { ReactComponent as EditIcon } from '../../../../assets/profile.edit-icon.svg';
import { ChangePasswordForm } from './ChangePasswordForm';
import {
  ChangePasswordContainer,
  TextBox,
} from '../../../../styles/Settings.styled';

export const SecurityAndLogin = () => {
  const [isHiddenForm, setIsHiddenForm] = useState(true);

  return (
    <>
      {isHiddenForm ? (
        <Grid item md={9}>
          <ChangePasswordContainer>
            <KeyIcon />
            <TextBox>
              <Typography sx={{ fontSize: '16px' }}>
                Şifrəni dəyişdir
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#757575' }}>
                Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
                etmək yaxşı fikirdir
              </Typography>
            </TextBox>
            <IconButton
              component="span"
              aria-label="change password"
              sx={{ position: 'absolute', right: '12px' }}
            >
              <EditIcon onClick={() => setIsHiddenForm(!isHiddenForm)} />
            </IconButton>
          </ChangePasswordContainer>
        </Grid>
      ) : (
        <ChangePasswordForm
          isHiddenForm={isHiddenForm}
          setIsHiddenForm={setIsHiddenForm}
        />
      )}
    </>
  );
};
