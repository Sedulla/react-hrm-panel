import { useState } from 'react';
import {
  styled,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { togglePasswordVisibility } from '../../../redux/auth/userSlice';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';

const PageContent = styled(Box)(({ theme }) => ({
  backgroundColor: '#E5E5E5',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Container = styled(Box)(({ theme }) => ({
  width: 884,
  height: 420,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: 442,
  height: 420,
  backgroundColor: '#9B5AE1',
  padding: '148px 0px',
  borderRadius: '12px 0px 0px 12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

const RightContainer = styled(Box)(({ theme }) => ({
  width: 442,
  height: 420,
  backgroundColor: '#FFFFFF',
  padding: ' 0px 60px',
  borderRadius: '0px 12px 12px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: 322,
  height: 36,
  backgroundColor: '#9B5AE1',
  borderRadius: '4px',
  padding: '8px 16px',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#9B5AE1',
  },
}));

const schema = yup.object().shape({
  username: yup.string().required('User name is required'),
  password: yup
    .string()
    .min(7, 'Password is too short - should be 8 chars minimum.')
    .max(15, 'Password is too long - should be 15 chars maximum.')
    .required('Password is required'),
});

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'super',
    password: 'Pass2021',
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    setLoading(true);
    try {
      await login(userInfo.username, userInfo.password);
      navigate('/');
    } catch (e) {
      console.log(e);
      toast.error(e.message);
      setLoading(false);
    }
  };

  return (
    <>
      <PageContent>
        <Container>
          <LeftContainer>Logo</LeftContainer>
          <RightContainer>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="user-name">İstifadəçi adı</InputLabel>
                <OutlinedInput
                  id="user-name"
                  sx={{ width: '322px', height: '52px', mb: '1rem' }}
                  type="text"
                  {...register('username')}
                  value={userInfo.username}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                />
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="password">Şifrə</InputLabel>
                <OutlinedInput
                  sx={{ width: '322px', height: '52px', mb: '1rem' }}
                  id="password"
                  autoComplete="password"
                  type={userInfo.password.show ? 'text' : 'password'}
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                  {...register('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          dispatch(togglePasswordVisibility());
                        }}
                        edge="end"
                      >
                        {userInfo.password.show ? (
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

              <LoginButton type="submit">Daxil ol</LoginButton>
            </form>
          </RightContainer>
        </Container>
      </PageContent>
    </>
  );
};
