import {
  styled,
  Grid as MuiGrid,
  Box,
  Button as MuiButton,
  Divider,
  TableCell,
  Avatar,
} from '@mui/material';

// LAYOUT COMPONENTS STYLES

const PageContent = styled(Box)(({ theme }) => ({}));

const MainGrid = styled(MuiGrid)(({ theme }) => ({
  margin: '13px ',
}));
const ButtonsListGrid = styled(MuiGrid)(({ theme }) => ({}));

const Container = styled(Box)(({ theme }) => ({
  padding: '16px',
  paddingLeft: '34px',
}));

const ButtonsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// BUTTONS COMPONENTS STYLES

const Button = styled(MuiButton)(({ theme }) => ({
  width: 242,
  height: 40,
  borderRadius: '4px',
  padding: '8px',
  justifyContent: 'start',
  alignItems: 'center',
  color: '#424242',
  background: '#fff',

  '&:hover': {
    color: '#9B5AE1',
  },

  '&:active': {
    color: '#9B5AE1',
    background: 'rgba(155, 90, 225, 0.12)',
  },
}));

const SettingsButton = styled(Button)(({ theme }) => ({}));
const SecurityButton = styled(Button)(({ theme }) => ({}));

const VerticalDivider = styled(Divider)(({ theme }) => ({
  width: '1px',
  height: '650px',

  // marginTop: '-50px',
  marginLeft: '48px',
  marginRight: '16px',
  marginTop: '-16px',
}));

// TABLE COMPONENTS STYLES

const TableContainer = styled(Box)(({ theme }) => ({
  width: 552,
  height: 195,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  padding: '0 16px',
}));

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  width: 200,
  paddingLeft: '0px',
  color: '#BDBDBD',
}));

// PROFILE COMPONENTS STYLES

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  margin: '0 auto',
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  width: 252,
  height: 195,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '8px',
}));

// SECURITY COMPONENTS STYLES
const ChangePasswordContainer = styled(Box)(({ theme }) => ({
  width: 820,
  height: 60,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px',
  position: 'relative',
}));

const TextBox = styled(Box)(({ theme }) => ({}));

// PASSWORD FORM COMPONENTS STYLES

const PasswordFormContainer = styled(Box)(({ theme }) => ({
  width: 820,
  height: 330,

  border: '1px solid #e0e0e0',
  backgroundColor: '#fafafa',
  borderRadius: '4px',
}));

const FormHeader = styled(Box)(({ theme }) => ({
  height: 70,
  display: 'flex',
  alignItems: ' center',
  gap: '16px',
  padding: '16px',
  borderBottom: '1px solid #e0e0e0',
}));

const FormInputsGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '12px',
}));

const PasswordFormSaveButton = styled(MuiButton)(({ theme }) => ({
  width: 108,
  height: 30,
  borderRadius: '4px',
  color: theme.palette.common.white,
  background: '#4CAF50',

  '&:hover': {
    backgroundColor: '#388E3C',
  },
}));

const PasswordFormCloseButton = styled(MuiButton)(({ theme }) => ({
  width: 68,
  height: 30,
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
  color: 'rgba(0, 0, 0, 0.87)',
  padding: '8px 16px',
}));

const FormContent = styled(Box)(({ theme }) => ({
  height: 260,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '16px',
}));

const FormFooter = styled(Box)(({ theme }) => ({}));

export {
  PageContent,
  Container,
  MainGrid,
  ButtonsListGrid,
  ButtonsBox,
  SettingsButton,
  SecurityButton,
  VerticalDivider,
  TableContainer,
  TableHeaderCell,
  ProfileContainer,
  ProfileAvatar,
  ChangePasswordContainer,
  TextBox,
  PasswordFormContainer,
  FormHeader,
  FormInputsGroup,
  FormContent,
  FormFooter,
  PasswordFormSaveButton,
  PasswordFormCloseButton,
};
