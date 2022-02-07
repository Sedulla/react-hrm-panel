import { Box, styled } from '@mui/material';
import { useNav } from '../contexts/NavContextProvider';
import { SideNav } from './Sidenav/Sidenav';
import { TopNav } from './Topnav/TopNav';
import { Loadable } from './Loadable/Loadable';
import { drawerWidth } from '../utilities/constants';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default,
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    position: 'sticky',
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

export const AppLayout = ({ children }) => {
  const { navOpen } = useNav();

  return (
    <>
      <LayoutRoot>
        <TopNav />
        <SideNav />
        <Main open={navOpen} sx={{ mt: '120px' }}>
          {children}
        </Main>
      </LayoutRoot>
    </>
  );
};
