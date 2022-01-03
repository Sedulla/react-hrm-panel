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
import { useNav } from '../../utils/providers/NavContextProvider';
import { Box } from '@mui/system';

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

export const TopNav = () => {
  const { navOpen, handleToggleDrawer } = useNav();

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
            <Button>
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
                  color: '#000',
                }}
              >
                Aydın Abbasov
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        position="fixed"
        open={navOpen}
        sx={{
          backgroundColor: '#fff',
          color: '#000',
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
    </>
  );
};
