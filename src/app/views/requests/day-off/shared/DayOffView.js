import { useState } from 'react';
import {
  AppBar,
  Box,
  styled,
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
import { PagesNav } from '../../../../components/styles/PagesNav.styled';
import { useNav } from '../../../../contexts/NavContextProvider';

const PageContent = styled(Box)(({ theme }) => ({}));

const PageHeader = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  height: 49,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '16px',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  width: 907,
  height: 52,
  backgroundColor: '#FAFAFA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '16px',
  padding: '8px',
  borderRadius: '4px',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
}));

const FormHeader = styled(Box)(({ theme }) => ({
  height: '60px',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  padding: '0px 20px',
}));

export const DayOffView = () => {
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
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '-23px',
                  height: '2px',
                  width: 185,
                  backgroundColor: '#9B5AE1',
                  mt: '53px',
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
              <Typography sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Sorğunun formalaşdırılması
              </Typography>
            </FormHeader>

            <Table sx={{ padding: '0 16px', borderCollapse: 'separate' }}>
              <TableBody>
                <TableRow
                  sx={{
                    verticalAlign: 'top',
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '244px',
                      verticalAlign: 'top',
                      color: '#9E9E9E',
                    }}
                  >
                    <Typography>Day off tarixi</Typography>
                  </TableCell>
                  <TableCell
                    component="td"
                    scope="row"
                    sx={{ width: '537px', color: '#212121' }}
                  >
                    <Typography> 25/05/2021</Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{
                    verticalAlign: 'top',
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: '#9E9E9E' }}
                  >
                    <Typography> Növü</Typography>
                  </TableCell>
                  <TableCell
                    component="td"
                    scope="row"
                    sx={{ color: '#212121' }}
                  >
                    <Typography>Tam gün</Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{
                    verticalAlign: 'top',
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ borderBottom: 'none', color: '#9E9E9E' }}
                  >
                    <Typography> Nəticə</Typography>
                  </TableCell>
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
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
