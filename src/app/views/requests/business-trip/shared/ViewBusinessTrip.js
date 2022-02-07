import { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Table,
  TableBody,
} from '@mui/material';
import { Info as InfoIcon, KeyboardArrowDown } from '@mui/icons-material';
import { PagesNav } from '../../../../styles/PagesNav.styled';
import { useNav } from '../../../../contexts/NavContextProvider';
import {
  PageContent,
  PageHeader,
  Container,
  FormContainer,
  FormHeader,
  FormHeaderText,
  InfoContainer,
  FormTableRow,
  FormTableCell,
} from '../../../../styles/Requests.styled';

export const ViewBusinessTrip = () => {
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
                <Typography color="text.primary"> Ezamiyyət</Typography>
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
                '&:after': {
                  content: '""',
                  display: 'block',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '-25px',
                  height: '2px',
                  width: 129,
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
            <InfoIcon />
            <Typography
              color="initial"
              sx={{
                fontSize: '1rem',
                ml: '8px',
              }}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: 'bold',
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

            <Table sx={{ padding: '0 16px', borderCollapse: 'separate' }}>
              <TableBody>
                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '244px',
                      color: '#9E9E9E',
                    }}
                  >
                    <Typography>Başlama tarixi</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ width: '537px', color: '#212121' }}
                  >
                    <Typography> 25/05/2021</Typography>
                  </FormTableCell>
                </FormTableRow>

                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '244px',
                      color: '#9E9E9E',
                    }}
                  >
                    <Typography>Bitmə tarixi</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ width: '537px', color: '#212121' }}
                  >
                    <Typography> 21/06/2021</Typography>
                  </FormTableCell>
                </FormTableRow>
                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{ color: '#9E9E9E' }}
                  >
                    <Typography> Qeyd</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ color: '#212121' }}
                  >
                    <Typography>Sadə qeyd</Typography>
                  </FormTableCell>
                </FormTableRow>

                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{ borderBottom: 'none', color: '#9E9E9E' }}
                  >
                    <Typography> Nəticə</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ borderBottom: 'none', color: '#212121' }}
                  >
                    <Typography>Departament rəhbərin göndərməsi</Typography>
                  </FormTableCell>
                </FormTableRow>
              </TableBody>
            </Table>
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
