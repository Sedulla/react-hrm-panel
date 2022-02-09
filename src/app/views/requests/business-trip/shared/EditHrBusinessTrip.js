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
  TextField,
  OutlinedInput,
  InputAdornment,
  Table,
  TableBody,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  Info as InfoIcon,
  KeyboardArrowDown,
  AttachFile as AttachFileIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
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
  FormHeaderText,
  StartEndDateBox,
  FormTableCell,
  FormTableRow,
  RequestDetailsDialog,
  RequestDetailsDialogTitle,
  RequestDetailsDialogContent,
  RequestDetailsDialogActions,
  DialogCloseButton,
} from '../../../../styles/Requests.styled';

export const EditHrBusinessTrip = () => {
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
                <Typography color="text.primary">
                  {' '}
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
                color: '#000',
              }}
            >
              Sorğunun formalaşdırılması
            </Typography>
            <Typography
              sx={{
                color: '#000',
                ml: '16px',
              }}
            >
              Departament rəhbərin göndərməsi
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
                  left: '-13px',
                  height: '2px',
                  width: 129,
                  backgroundColor: '#9B5AE1',
                  mt: '30px',
                },
              }}
            >
              HR göndərməsi
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
              <FormHeaderText>HR göndərməsi </FormHeaderText>

              <IconButton aria-label="" onClick={handleClickOpen}>
                <InfoOutlinedIcon
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                />
              </IconButton>
            </FormHeader>

            <FormInputsGroup>
              <StartEndDateBox>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disabled
                    views={['day', 'month', 'year']}
                    label="Başlama tarixi"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        sx={{
                          width: 432,
                          border: '1px dashed rgba(0, 0, 0, 0.38);',
                        }}
                      />
                    )}
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disabled
                    views={['day', 'month', 'year']}
                    label="Bitmə tarixi"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        sx={{
                          width: 432,
                          border: '1px dashed rgba(0, 0, 0, 0.38);',
                        }}
                      />
                    )}
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </LocalizationProvider>
              </StartEndDateBox>

              <FormControl
                sx={{
                  width: 875,
                  border: '1px dashed rgba(0, 0, 0, 0.38);',
                }}
              >
                <OutlinedInput
                  id="file"
                  name="file"
                  value="Skan edilmiş sənəd"
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachFileIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="clear file" onClick={() => {}}>
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                ></OutlinedInput>
              </FormControl>

              <FormControl
                sx={{
                  width: 875,
                  border: '1px dashed rgba(0, 0, 0, 0.38);',
                }}
              >
                <InputLabel htmlFor="component">Qeyd</InputLabel>
                <OutlinedInput
                  id="component"
                  type="text"
                  value="Sadə qeyd"
                  disabled
                  aria-disabled="true"
                />
              </FormControl>
              <FormControl
                sx={{
                  width: '875px',
                }}
              >
                <InputLabel htmlFor="select">Nəticə</InputLabel>
                <Select id="select">
                  <MenuItem value={'Departament rəhbərin göndərməsi'}>
                    Təsdiqləndi
                  </MenuItem>
                  <MenuItem value={'Ləğv olundu'}>Ləğv olundu</MenuItem>
                  <MenuItem value={'Gözlənilir'}>Test3</MenuItem>
                </Select>
              </FormControl>
            </FormInputsGroup>
          </FormContainer>
          <FormFooter>
            <SaveButton>Yadda saxla və Bitir</SaveButton>
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
                  <FormTableCell sx={{ fontWeight: 'bold' }} component="th">
                    Sorğunun sənədi
                  </FormTableCell>
                  <FormTableCell>Sorğunun sənədi.pdf</FormTableCell>
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
