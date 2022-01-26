import { styled } from '@mui/material';
import { useNav } from '../utilities/providers/NavContextProvider';
import { Navigation } from './Navigation/Navigation';
import { TopNav } from './Navigation/TopNav';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
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

export const Layout = ({ children }) => {
  const { navOpen } = useNav();

  return (
    <>
      <TopNav />
      <Navigation />

      <Main open={navOpen} sx={{ mt: '120px' }}>
        {children}
      </Main>
    </>
  );
};
