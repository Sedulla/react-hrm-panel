import { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TableBody,
  Table,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  Info as InfoIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useNav } from '../../../../contexts/NavContextProvider';
import { PagesNav } from '../../../../styles/PagesNav.styled';
import {
  PageContent,
  PageHeader,
  Container,
  InfoContainer,
  FormContainer,
  FormHeader,
  FormInputsGroup,
  FormFooter,
  SaveButton,
  FormTableCell,
  FormTableRow,
  RequestDetailsDialog,
  RequestDetailsDialogTitle,
  RequestDetailsDialogContent,
  RequestDetailsDialogActions,
  DialogCloseButton,
  FormHeaderText,
  ActionButtonsContainer,
} from '../../../../styles/Requests.styled';

export const EditDepartmentHeadItSupply = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();
  const [value, setValue] = useState(new Date());
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
                <Typography
                  sx={{
                    color: '#424242',
                    fontWeight: 'bold',
                  }}
                >
                  IT təchizat
                </Typography>
                <Typography
                  sx={{
                    color: '#424242',
                    fontWeight: 'bold',
                  }}
                >
                  Sorğunun redaktəsi
                </Typography>
              </Breadcrumbs>
            </div>
          </Toolbar>
        </PagesNav>

        <PageHeader>
          <Toolbar>
            <Typography
              sx={{
                ml: '-10px',
                color: '#000',
              }}
            >
              Sorğunun formalaşdırılması
            </Typography>
            <Typography
              sx={{
                color: '#9B5AE1',
                ml: '16px',
                position: 'relative',
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
              <FormHeaderText>Departament rəhbərin göndərməsi</FormHeaderText>

              <ActionButtonsContainer>
                <IconButton aria-label="" onClick={handleClickOpen}>
                  <InfoOutlinedIcon />
                </IconButton>
              </ActionButtonsContainer>
            </FormHeader>

            <FormInputsGroup>
              <FormControl
                sx={{
                  width: 875,
                  border: '1px dashed rgba(0, 0, 0, 0.38);',
                }}
              >
                <OutlinedInput
                  disabled
                  id="file"
                  name="file"
                  value="Qeyd"
                ></OutlinedInput>
              </FormControl>
              <FormControl
                sx={{
                  width: 875,
                  border: '1px dashed rgba(0, 0, 0, 0.38);',
                }}
              >
                <OutlinedInput
                  disabled
                  id="file"
                  name="file"
                  value="Nəticə mətni"
                ></OutlinedInput>
              </FormControl>

              <FormControl
                sx={{
                  width: 875,
                }}
              >
                <InputLabel htmlFor="select">Nəticə</InputLabel>
                <Select id="select">
                  <MenuItem value={'Departament rəhbərin göndərməsi'}>
                    Departament rəhbərin göndərməsi
                  </MenuItem>
                  <MenuItem value={'HR göndərməsi'}>HR göndərməsi</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
            </FormInputsGroup>
          </FormContainer>
          <FormFooter>
            <SaveButton>Yadda saxla və Yönləndir</SaveButton>
          </FormFooter>
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
                <FormTableRow>
                  <FormTableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    A.S.A
                  </FormTableCell>
                  <FormTableCell sx={{ width: 270 }}>
                    Hüseyn Lətifov İ.
                  </FormTableCell>
                </FormTableRow>
                <FormTableRow>
                  <FormTableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    Korporativ nömrə
                  </FormTableCell>
                  <FormTableCell>+994 55 434 43 43</FormTableCell>
                </FormTableRow>
                <FormTableRow>
                  <FormTableCell
                    sx={{ width: 270, fontWeight: 'bold' }}
                    component="th"
                  >
                    Vəzifə
                  </FormTableCell>
                  <FormTableCell>Sürücü</FormTableCell>
                </FormTableRow>
                <FormTableRow>
                  <FormTableCell sx={{ fontWeight: 'bold' }} component="th">
                    Şöbə
                  </FormTableCell>
                  <FormTableCell>Əsas</FormTableCell>
                </FormTableRow>
                <FormTableRow>
                  <FormTableCell
                    sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                    component="th"
                  >
                    Tarix
                  </FormTableCell>
                  <FormTableCell sx={{ borderBottom: 'none' }}>
                    25/05/2021
                  </FormTableCell>
                </FormTableRow>
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
