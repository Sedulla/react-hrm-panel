import { Box, styled } from '@mui/system';
import { CircularProgress as MuiCircularProgress } from '@mui/material';

const StyledLoading = styled('div')(() => ({
  width: '100vh',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CircleLogo = styled('img')(() => ({
  width: 'auto',
  height: '25px',
}));

const CircularProgress = styled(MuiCircularProgress)(() => ({
  position: 'absolute',
  left: -7,
  right: 0,
  top: 'calc(50vh - 25px)',
}));

export const Loading = () => {
  return (
    <StyledLoading>
      <Box position="relative">
        <CircleLogo src="../../assets/logo-circle.svg" alt="" />
        <CircularProgress />
      </Box>
    </StyledLoading>
  );
};
