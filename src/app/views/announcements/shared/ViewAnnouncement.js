import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Breadcrumbs,
  Toolbar,
  Link as MuiLink,
} from '@mui/material';
import { Edit as EditIcon, KeyboardArrowDown } from '@mui/icons-material';
import {
  Container,
  FormContainer,
  FormHeader,
  FormHeaderText,
  PageContent,
  PageHeader,
  PagesNav,
} from '../../../styles/Global.styled';
import { useNav } from '../../../contexts/NavContextProvider';
import {
  TableContainer,
  TableHeaderCell,
} from '../../../styles/Announcements.styled';

export const ViewAnnouncement = () => {
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
          <Toolbar>
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
                <Typography color="text.primary"> Elan</Typography>
                <Typography color="text.primary"> Elanın təsviri</Typography>
              </Breadcrumbs>
            </div>
          </Toolbar>
        </PagesNav>

        <PageHeader>
          <Toolbar>
            <Typography
              sx={{
                color: '#9B5AE1',
                position: 'relative',
                ml: '-10px',
                '&:after': {
                  content: '""',
                  display: 'block',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '-30px',
                  height: '2px',
                  width: 185,
                  backgroundColor: '#9B5AE1',
                  mt: '30px',
                },
              }}
            >
              Elanın formalaşdırılması
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <FormContainer>
            <FormHeader>
              <FormHeaderText> Elanın təsviri</FormHeaderText>

              <Link to="/announcements/edit/:id" class="link">
                <IconButton>
                  <EditIcon
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  />
                </IconButton>
              </Link>
            </FormHeader>

            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeaderCell component="th" scope="row">
                      <Typography>Adı</Typography>
                    </TableHeaderCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ width: 537, color: '#212121' }}
                    >
                      <Typography> lorem</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeaderCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: 'none' }}
                    >
                      <Typography> Təsviri</Typography>
                    </TableHeaderCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{
                        width: 537,
                        borderBottom: 'none',
                        color: '#212121',
                      }}
                    >
                      <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore possimus harum officiis explicabo nemo
                        repellat ab, saepe est, cum rem quisquam mollitia atque
                        adipisci optio? Quaerat voluptate sunt est magni.
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
