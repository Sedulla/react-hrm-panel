import React from 'react';
import { styled, Box } from '@mui/material';

const CenterDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '50vh',
}));

export const Coworkers = () => {
  return (
    <>
      <CenterDiv>
        <h1>Not built yet!</h1>
      </CenterDiv>
    </>
  );
};
