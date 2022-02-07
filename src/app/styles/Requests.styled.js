import {
  AppBar,
  Box,
  styled,
  Button as MuiButton,
  TableCell,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

// LAYOUT COMPONENTS STYLES
const PageContent = styled(Box)(({ theme }) => ({}));

const PageHeader = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  height: 49,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  border: '1px solid #e0e0e0',
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '16px',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  width: 907,
  height: 52,
  backgroundColor: '#FAFAFA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '8px',
  borderRadius: '4px',
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({}));

const StartEndDateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
}));

// FORM COMPONENTS STYLES

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginTop: '16px',
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

const FormTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px 0px 12px',
}));

const FormTableRow = styled(TableRow)(({ theme }) => ({
  verticalAlign: 'top',
}));

const FormFooter = styled(Box)(({ theme }) => ({
  width: 907,
  height: 36,
  position: 'relative',
}));

// DIALOG STYLES

const RequestDetailsDialog = styled(Dialog)(({ theme }) => ({}));

const RequestDetailsDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: '#424242',
  fontSize: '1.125rem',
  padding: '20px 16px',
}));

const RequestDetailsDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '0 16px',
}));

const RequestDetailsDialogActions = styled(DialogActions)(({ theme }) => ({}));

// BUTTONS STYLES

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '4px',
  padding: '0px 16px',
  height: 36,
}));

const SaveButton = styled(Button)(({ theme }) => ({
  width: 188,
  fontWeight: 500,
  fontSize: '1.05rem',
  backgroundColor: '#4CAF50',
  border: '1px solid #4CAF50',
  color: '#fff',
  marginTop: '16px',
  position: 'absolute',
  right: 0,

  '&:hover': {
    backgroundColor: '#4CAF50',
  },
}));

const DialogCloseButton = styled(Button)(({ theme }) => ({
  width: 68,
  backgroundColor: '#EEEEEE',
  color: '#424242',
}));

export {
  PageContent,
  PageHeader,
  Container,
  InfoContainer,
  FormContainer,
  FormHeader,
  FormHeaderText,
  FormInputsGroup,
  FormTableCell,
  FormTableRow,
  FormFooter,
  SaveButton,
  ActionButtonsContainer,
  RequestDetailsDialog,
  RequestDetailsDialogTitle,
  RequestDetailsDialogContent,
  RequestDetailsDialogActions,
  DialogCloseButton,
  StartEndDateBox,
};
