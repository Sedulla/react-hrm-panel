import { useState } from 'react';
import {
  AppBar as MuiAppBar,
  styled,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Button,
  Box,
} from '@mui/material';
import { Add as AddIcon, KeyboardArrowDown } from '@mui/icons-material';
import { AnnouncementsTable } from './shared/AnnouncementsTable';
import { useNav } from '../../contexts/NavContextProvider';
import { Link } from 'react-router-dom';
import { drawerWidth } from '../../utilities/constants';

const PageContent = styled(Box)(({ theme }) => ({}));

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

const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#9B5AE1',
  color: theme.palette.common.white,
  width: '111px',
  height: '36px',
  borderRadius: '4px',
  fontWeight: '500',
  padding: '6px 16px 6px 12px',

  '&:hover': {
    backgroundColor: '#8B3DCF',
  },
}));

export const AnnouncementPage = () => {
  const { navOpen } = useNav();
  const [addNewAncmt, setAddNewAncmt] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <PageContent>
        <AppBar
          open={navOpen}
          position="fixed"
          sx={{
            backgroundColor: '#fff',
            color: '#424242',
            mt: '63px',
            borderTop: '2px solid #e0e0e0',
            borderBottom: '2px solid #e0e0e0',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <MuiLink
                  underline="hover"
                  color="inherit"
                  href="/"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                  }}
                >
                  <KeyboardArrowDown sx={{ ml: 0.5 }} />
                  Elanlar
                </MuiLink>
                <Typography color="text.primary"> Elan</Typography>
              </Breadcrumbs>
            </div>

            <Link className="link" to="/requests/announcement-add">
              <AddButton onClick={() => setAddNewAncmt(!addNewAncmt)}>
                <AddIcon sx={{ mr: 0.6 }} />
                Əlavə et
              </AddButton>
            </Link>
          </Toolbar>
        </AppBar>
        <AnnouncementsTable />
      </PageContent>
    </>
  );
};
