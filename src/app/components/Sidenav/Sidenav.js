import { styled, Drawer } from '@mui/material';
import { Menu } from './Menu';
// import { NavListItem } from './NavListItem';
import { navigations } from '../../utilities/navigations';
import { useNav } from '../../contexts/NavContextProvider';
import { drawerWidth } from '../../utilities/constants';

const DrawerHeader = styled('div')(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  color: theme.palette.common.white,
}));

export const SideNav = () => {
  const { navOpen } = useNav();

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={navOpen}
      >
        <DrawerHeader>logo</DrawerHeader>
        <Menu items={navigations}></Menu>
      </Drawer>
    </>
  );
};
