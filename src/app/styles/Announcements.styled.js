import {
  styled,
  Box,
  Button as MuiButton,
  TableCell,
  tableCellClasses,
  Dialog,
  DialogContentText,
} from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  padding: '26px 16px 16px 16px',
}));

const AddButton = styled(MuiButton)(({ theme }) => ({
  width: 111,
  height: 36,
  backgroundColor: '#9B5AE1',
  color: theme.palette.common.white,
  borderRadius: '4px',
  fontWeight: '500',
  padding: '6px 16px 6px 12px',

  '&:hover': {
    backgroundColor: '#8B3DCF',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F5F5F5    ',
    color: '#424242',
    fontWeight: '700',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

// CONFIRM DIALOG STYLED COMPONENTS

const DeleteConfirmDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paperWidthSm': {
    width: '370px',
    height: '171px',
  },
}));

const DeleteConfirmDialogContentText = styled(DialogContentText)(
  ({ theme }) => ({
    fontSize: '14px',
    color: '#424242',
    marginBottom: '16px',
  })
);

const CancelButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#EEEEEE',
  color: '#424242',
  width: 88,
  height: 36,
  borderRadius: 4,
  margin: '0px 12px',
  padding: '0px 16px',

  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
}));

const DeleteButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#F44336',
  color: '#fff',
  width: 48,
  height: 36,
  padding: '0px 16px',
  margin: '0px 12px',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: '#F44336',
  },
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
  AddButton,
  StyledTableCell,
  DeleteConfirmDialog,
  DeleteConfirmDialogContentText,
  CancelButton,
  DeleteButton,
  SaveButton,
  ConcludeButton,
  TableContainer,
  TableHeaderCell,
};
