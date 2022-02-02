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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  Info as InfoIcon,
  KeyboardArrowDown,
  Edit as EditIcon,
} from '@mui/icons-material';
import { PagesNav } from '../../../components/styles/PagesNav.styled';
import { useNav } from '../../../contexts/NavContextProvider';

const PageContent = styled(Box)(({ theme }) => ({}));

const PageHeader = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  height: 49,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  border: '1px solid #e0e0e0',
}));

const Container = styled(Box)(({ theme }) => ({
  margin: '0 auto',
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
  justifyContent: 'space-between',
  padding: '16px',
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({}));

const RequestDetailsDialog = styled(Dialog)(({ theme }) => ({}));

const RequestDetailsDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: '#424242',
  fontSize: '1.125rem',
  padding: '20px 16px',
}));

const RequestDetailsDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '0 16px',
}));

const RequestDetailsDialogActions = styled(DialogActions)(({ theme }) => ({}));

const DialogCloseButton = styled(Button)(({ theme }) => ({
  width: 68,
  height: 36,
  padding: '0px 16px',
  backgroundColor: '#EEEEEE',
  color: '#424242',
  borderRadius: '4px',
}));

export const DepartmentHeadView = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
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
                color: '#000',
              }}
            >
              Sorğunun formalaşdırılması
            </Typography>
            <Typography
              sx={{
                color: '#9B5AE1',
                position: 'relative',
                ml: '16px',
                '&:after': {
                  content: '""',
                  display: 'block',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '-7px',
                  height: '2px',
                  width: 221,
                  backgroundColor: '#9B5AE1',
                  mt: '30px',
                },
              }}
            >
              Departament rəhbərin göndərməsi
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

              <ActionButtonsContainer>
                <IconButton aria-label="" onClick={() => setIsEdit(!isEdit)}>
                  <EditIcon
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label=""
                  onClick={handleClickOpen}
                  sx={{
                    ml: '12px',
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  />
                </IconButton>
              </ActionButtonsContainer>
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

        <RequestDetailsDialog
          open={open}
          onClose={handleClickOpen}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <RequestDetailsDialogTitle id="dialog-title">
            Sorğunun detalları
          </RequestDetailsDialogTitle>
          <RequestDetailsDialogContent dividers={'paper'}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    A.S.A
                  </TableCell>
                  <TableCell sx={{ width: 270 }}>Hüseyn Lətifov İ.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    Korporativ nömrə
                  </TableCell>
                  <TableCell>+994 55 434 43 43</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    Vəzifə
                  </TableCell>
                  <TableCell>Sürücü</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }} component="th">
                    Şöbə
                  </TableCell>
                  <TableCell>Əsas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                    component="th"
                  >
                    Tarix
                  </TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    25/05/2021
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </RequestDetailsDialogContent>
          <RequestDetailsDialogActions>
            <DialogCloseButton onClick={handleClickOpen}>
              Bağla
            </DialogCloseButton>
          </RequestDetailsDialogActions>
        </RequestDetailsDialog>
      </PageContent>
    </>
  );
};
