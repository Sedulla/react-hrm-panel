import { styled, Box } from '@mui/material';

const CenterDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '50vh',
}));

export const HomePage = () => {
  return (
    <>
      <CenterDiv>
        <h1>Home Page ...</h1>
      </CenterDiv>
    </>
  );
};
