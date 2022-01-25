import {
  AppBar as MuiAppBar,
  Grid as MuiGrid,
  Grid,
  Toolbar,
  Typography,
  styled,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { useNav } from '../../utilities/providers/NavContextProvider';
import { ReactComponent as SettingsIcon } from '../../assets/profile.settings-icon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/profile.security-icon.svg';
import { AccountDetails } from '../Settings/AccountDetails/AccountDetails';
import { SecurityAndLogin } from './SecurityAndLogin/SecurityAndLogin';
import { Routes, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// MuiTypography style - color: '#424242' except nav?

const MainGrid = styled(MuiGrid)(({ theme }) => ({
  paddingTop: theme.spacing(16),
}));

export const ProfileSettings = () => {
  const { navOpen } = useNav();

  return (
    <>
      <AppBar
        position="fixed"
        open={navOpen}
        sx={{
          backgroundColor: '#fff',
          color: '#424242',
          mt: '63px',
          borderTop: '2px solid #e0e0e0',
          borderBottom: '2px solid #e0e0e0',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ margin: '1px' }}>
          <Typography
            noWrap
            sx={{
              fontWeight: 'bold',
            }}
          >
            Profil / Hesab parametrləri
          </Typography>
        </Toolbar>
      </AppBar>

      <Main open={navOpen}>
        <MainGrid container>
          <Grid item md={2}>
            <Box>
              <Button
                startIcon={<SettingsIcon fill="red" />}
                sx={[
                  {
                    width: '242px',
                    height: '40px',
                    color: '#424242',
                    borderRadius: '4px',
                    justifyContent: 'flex-start',
                  },
                  {
                    '&:hover': {
                      color: '#9B5AE1',
                    },
                  },
                ]}
              >
                <Link
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  to="/account"
                >
                  Hesab parametləri
                </Link>
              </Button>
              <br />
              <Button
                startIcon={<SecurityIcon fill="green" />}
                sx={[
                  {
                    '&:hover': {
                      color: '#9B5AE1',
                    },
                  },
                  {
                    color: '#424242',
                    width: '242px',
                    height: '40px',
                    borderRadius: '4px',
                    justifyContent: 'flex-start',
                  },
                ]}
              >
                <Link
                  to="/security"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {' '}
                  Təhlükəsizlik və Giriş
                </Link>
              </Button>
            </Box>
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              marginTop: '-50px',
              height: '81vh',
              marginLeft: '60px',
            }}
          />

          <Routes>
            <Route path="/account" element={<AccountDetails />} />
            {/* settings?tab=account */}
            <Route path="/security" element={<SecurityAndLogin />} />
            {/* settings?tab=security */}
          </Routes>
        </MainGrid>
      </Main>
    </>
  );
};
