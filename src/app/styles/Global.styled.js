import {
  styled,
  AppBar,
  Box,
  Typography,
  Button as MuiButton,
  TableCell,
  tableCellClasses,
  Dialog,
  DialogContentText,
} from '@mui/material';
import { drawerWidth } from '../utilities/constants';

const PagesNav = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const PageContent = styled(Box)(({ theme }) => ({}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '16px',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
}));

const PageHeader = styled(AppBar)(({ theme }) => ({
  height: 49,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  border: '1px solid #e0e0e0',
  position: 'relative',
}));

const FormHeader = styled(Box)(({ theme }) => ({
  height: 60,
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
}));

const FormHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 500,
  color: '#424242',
}));

const FormInputsGroup = styled(Box)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',
}));

const FormFooter = styled(Box)(({ theme }) => ({
  width: 907,
  height: 36,
  position: 'relative',
}));

const FormButtonsBox = styled(Box)(({ theme }) => ({
  marginTop: '16px',
  position: 'absolute',
  right: 0,
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
    width: 370,
    height: 171,
  },
}));

const DeleteConfirmDialogContentText = styled(DialogContentText)(
  ({ theme }) => ({
    fontSize: '1.125rem',
    color: '#424242',
  })
);

const DeleteButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#F44336',
  color: '#fff',
  width: 48,
  height: 36,
  padding: '0px 16px',
  margin: '0px 12px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#F44336',
  },
}));

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

export {
  PageContent,
  PagesNav,
  Container,
  FormContainer,
  PageHeader,
  FormHeader,
  FormHeaderText,
  FormInputsGroup,
  FormFooter,
  FormButtonsBox,
  AddButton,
  StyledTableCell,
  DeleteConfirmDialog,
  DeleteConfirmDialogContentText,
  CancelButton,
  DeleteButton,
};
