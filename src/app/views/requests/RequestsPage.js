import { useState } from 'react';
import {
  styled,
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Breadcrumbs,
  Link as MuiLink,
  Typography,
  Button,
} from '@mui/material';
import {
  Add as AddIcon,
  KeyboardArrowDown,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNav } from '../../contexts/NavContextProvider';
import { Link } from 'react-router-dom';
import { drawerWidth } from '../../utilities/constants';
import { UsersTable } from './shared/UsersTable';
import { SearchRequest } from './shared/SearchRequest';

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
  marginLeft: '12px',

  '&:hover': {
    backgroundColor: '#8B3DCF',
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  width: 105,
  height: 36,
  padding: '6px 16px 6px 12px',
  borderRadius: '4px',
  color: '#424242',
  fontWeight: '500',
  backgroundColor: '#fff',

  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: '16px',
  marginTop: '11px',
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({}));

export const RequestsPage = () => {
  const { navOpen } = useNav();
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

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
                  Sorğular
                </MuiLink>
                <Typography color="text.primary"> Day off</Typography>
              </Breadcrumbs>
            </div>

            <ActionButtonsContainer>
              <SearchButton
                startIcon={<SearchIcon />}
                onClick={() => setIsVisibleSearch(!isVisibleSearch)}
              >
                Axtarış
              </SearchButton>

              <AddButton component={Link} to="/requests/new-request">
                <AddIcon sx={{ mr: 0.6 }} />
                Əlavə et
              </AddButton>
            </ActionButtonsContainer>
          </Toolbar>
        </AppBar>
        <Container>
          {isVisibleSearch && <SearchRequest />}
          <UsersTable />
        </Container>
      </PageContent>
    </>
  );
};
