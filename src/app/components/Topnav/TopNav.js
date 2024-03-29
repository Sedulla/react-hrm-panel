import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  styled,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNav } from '../../contexts/NavContextProvider';
import { Box } from '@mui/system';
import { drawerWidth } from '../../utilities/constants';
import { useNavigate } from 'react-router-dom';

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

export const TopNav = () => {
  const { navOpen, handleToggleDrawer } = useNav();
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="fixed"
        open={navOpen}
        sx={{
          backgroundColor: '#fff',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            edge="start"
            sx={{
              mr: 2,
              color: '#424242',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginLeft: 'auto', alignItems: 'center' }}>
            <Button onClick={() => navigate('settings/profile')}>
              <Avatar
                alt="profile img"
                src=""
                sx={{ width: '34px', height: '34px', p: 0 }}
              />
              <Typography
                noWrap
                sx={{
                  marginLeft: '11px',
                  fontWeight: 'bold',
                  color: '#424242',
                }}
              >
                Aydın Abbasov
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
