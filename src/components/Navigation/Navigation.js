import { styled, Drawer } from '@mui/material';
import { Menu } from './Menu';
// import { NavListItem } from './NavListItem';
import { navigations } from '../../navigations';
import { useNav } from '../../utils/providers/NavContextProvider';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  color: theme.palette.common.white,
}));

export const Navigation = () => {
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
