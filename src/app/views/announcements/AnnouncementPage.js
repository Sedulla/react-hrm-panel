import {
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Add as AddIcon, KeyboardArrowDown } from '@mui/icons-material';
import { AnnouncementsTable } from './shared/AnnouncementsTable';
import { useNav } from '../../contexts/NavContextProvider';
import { Link } from 'react-router-dom';
import { PageContent, PagesNav, AddButton } from '../../styles/Global.styled';

export const AnnouncementPage = () => {
  const { navOpen } = useNav();

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
                  Elanlar
                </MuiLink>
                <Typography color="text.primary"> Elan</Typography>
              </Breadcrumbs>
            </div>

            <Link class="link" to="/announcements/add">
              <AddButton>
                <AddIcon sx={{ mr: 0.6 }} />
                Əlavə et
              </AddButton>
            </Link>
          </Toolbar>
        </PagesNav>

        <AnnouncementsTable />
      </PageContent>
    </>
  );
};
