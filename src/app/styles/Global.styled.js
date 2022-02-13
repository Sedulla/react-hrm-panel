import { styled, AppBar, Box, Typography } from '@mui/material';
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
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginTop: '16px',
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
};
