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
  IconButton,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  Info as InfoIcon,
  KeyboardArrowDown,
  Edit as EditIcon,
} from '@mui/icons-material';
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
  ActionButtonsContainer,
} from '../../../../styles/Requests.styled';
import { RequestDetailsDialog } from './RequestDetailsDialog';

export const ViewDepartmentHeadDayOff = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();
  const [isEdit, setIsEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickDialog = () => {
    setOpenDialog(!openDialog);
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
              <FormHeader>
                <FormHeaderText>Sorğunun formalaşdırılması</FormHeaderText>
              </FormHeader>

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
                  onClick={handleClickDialog}
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

            <Table>
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
          open={openDialog}
          handleClick={handleClickDialog}
        />
      </PageContent>
    </>
  );
};
