import { useState } from 'react';
import { Toolbar, Typography } from '@mui/material';
import { useNav } from '../../contexts/NavContextProvider';
import { ReactComponent as SettingsIcon } from '../../assets/profile.settings-icon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/profile.security-icon.svg';
import { PagesNav } from '../../styles/PagesNav.styled';
import {
  PageContent,
  MainGrid,
  ButtonsListGrid,
  Container,
  ButtonsBox,
  SettingsButton,
  SecurityButton,
  VerticalDivider,
} from '../../styles/Settings.styled';
import { AccountDetails } from '././shared/AccountDetails/AccountDetails';
import { SecurityAndLogin } from './shared/SecurityAndLogin/SecurityAndLogin';

export const ProfileSettingsPage = () => {
  const { navOpen } = useNav();
  const [isSecurityPage, setIsSecurityPage] = useState(false);

  return (
    <>
      <PageContent>
        <PagesNav
          position="fixed"
          open={navOpen}
          sx={{
            backgroundColor: '#fff',
            color: '#424242',
            mt: '63px',
            borderTop: '2px solid #e0e0e0',
            borderBottom: '2px solid #e0e0e0',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Typography
              noWrap
              sx={{
                fontWeight: 'bold',
              }}
            >
              Profil /{' '}
              {isSecurityPage ? 'Təhlükəsizlik və Giriş' : 'Hesab parametrləri'}
            </Typography>
          </Toolbar>
        </PagesNav>

        <Container>
          <MainGrid container>
            <ButtonsListGrid item md={2}>
              <ButtonsBox>
                <SettingsButton
                  startIcon={<SettingsIcon fill="red" />}
                  onClick={() => setIsSecurityPage(false)}
                >
                  Hesab parametləri
                </SettingsButton>
                <SecurityButton
                  startIcon={<SecurityIcon fill="green" />}
                  onClick={() => setIsSecurityPage(true)}
                >
                  Təhlükəsizlik və Giriş
                </SecurityButton>
              </ButtonsBox>
            </ButtonsListGrid>

            <VerticalDivider orientation="vertical" flexItem md={1} />

            {isSecurityPage ? <SecurityAndLogin /> : <AccountDetails />}
          </MainGrid>
        </Container>
      </PageContent>
    </>
  );
};
