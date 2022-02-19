import { styled, Box, Button as MuiButton, TableCell } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  padding: '26px 16px 16px 16px',
}));

const SaveButton = styled(MuiButton)(({ theme }) => ({
  width: 108,
  height: 36,
  border: '1px solid #4CAF50',
  borderRadius: '4px',
  padding: '0px 16px',
  color: ' #4CAF50',
  fontWeight: 500,
  marginRight: '16px', // gap between buttons
}));

const ConcludeButton = styled(MuiButton)(({ theme }) => ({
  width: 92,
  height: 36,
  padding: '0px 16px',
  color: theme.palette.common.white,
  backgroundColor: '#4CAF50',
  '&:hover': {
    backgroundColor: '#388E3C',
  },
}));

const TableContainer = styled(Box)(({ theme }) => ({
  padding: '0 16px',
}));

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  width: 244,
  verticalAlign: 'top',
  paddingLeft: '0px',
  color: '#9E9E9E',
}));

export {
  Container,
  SaveButton,
  ConcludeButton,
  TableContainer,
  TableHeaderCell,
};
