import { styled, Box } from '@mui/material';

const CenterDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '20vh',
}));

export const NotFoundPage = () => {
  return (
    <>
      <CenterDiv>
        <h1>Not Found!</h1>
      </CenterDiv>
    </>
  );
};
