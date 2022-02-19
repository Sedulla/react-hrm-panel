import { useState } from 'react';
import {
  Toolbar,
  Breadcrumbs,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  KeyboardArrowDown,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNav } from '../../../contexts/NavContextProvider';
import { Link } from 'react-router-dom';
import { UsersTable } from './shared/UsersTable';
import { SearchRequest } from './shared/SearchRequest';
import {
  AddButton,
  Container,
  PageContent,
  PagesNav,
} from '../../../styles/Global.styled';
import {
  ActionButtonsContainer,
  SearchForButton,
} from '../../../styles/Requests.styled';

export const DayOffPage = () => {
  const { navOpen } = useNav();
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <PageContent>
        <PagesNav
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
              <SearchForButton
                startIcon={<SearchIcon />}
                onClick={() => setIsVisibleSearch(!isVisibleSearch)}
              >
                Axtarış
              </SearchForButton>

              <AddButton component={Link} to="/requests/day-off/add">
                <AddIcon sx={{ mr: 0.6 }} />
                Əlavə et
              </AddButton>
            </ActionButtonsContainer>
          </Toolbar>
        </PagesNav>

        <Container>
          {isVisibleSearch && <SearchRequest />}
          <UsersTable />
        </Container>
      </PageContent>
    </>
  );
};
