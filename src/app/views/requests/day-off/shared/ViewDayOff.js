import { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { Info as InfoIcon, KeyboardArrowDown } from '@mui/icons-material';
import { useNav } from '../../../../contexts/NavContextProvider';
import {
  PagesNav,
  Container,
  FormContainer,
  FormHeader,
  FormHeaderText,
  PageContent,
  PageHeader,
} from '../../../../styles/Global.styled';
import {
  InfoContainer,
  TableContainer,
  TableHeaderCell,
} from '../../../../styles/Requests.styled';

export const ViewDayOff = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();

  const handleInputChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };

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
                <Typography color="text.primary"> Day off</Typography>
                <Typography color="text.primary"> Sorğunun təsviri</Typography>
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
              Sorğunun formalaşdırılması
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <InfoContainer>
            <InfoIcon sx={{ m: '16px 10px 18px' }} />
            <Typography
              color="initial"
              sx={{
                fontSize: '1.05rem',
              }}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: '700',
                }}
              >
                Sorğunu açan şəxs:
              </Box>{' '}
              Aydin Abbasov
            </Typography>
          </InfoContainer>

          <FormContainer>
            <FormHeader>
              <FormHeaderText>Sorğunun formalaşdırılması</FormHeaderText>
            </FormHeader>

            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeaderCell component="th" scope="row">
                      <Typography>Day off tarixi</Typography>
                    </TableHeaderCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ width: '537px', color: '#212121' }}
                    >
                      <Typography> 25/05/2021</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeaderCell component="th" scope="row">
                      <Typography> Növü</Typography>
                    </TableHeaderCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ color: '#212121' }}
                    >
                      <Typography>Tam gün</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeaderCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: 'none', color: '#9E9E9E' }}
                    >
                      <Typography> Nəticə</Typography>
                    </TableHeaderCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ borderBottom: 'none', color: '#212121' }}
                    >
                      <Typography>Departament rəhbərin göndərməsi</Typography>
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
