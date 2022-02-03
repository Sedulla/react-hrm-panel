import { useState } from 'react';
import {
  AppBar,
  Box,
  styled,
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
  Button,
} from '@mui/material';
import {
  InfoOutlined as InfoOutlinedIcon,
  Info as InfoIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNav } from '../../../../contexts/NavContextProvider';
import { PagesNav } from '../../../../components/styles/PagesNav.styled';

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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '16px',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  width: 907,
  height: 52,
  backgroundColor: '#FAFAFA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '8px',
  borderRadius: '4px',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  marginTop: '16px',
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

const FormInputsGroup = styled(Box)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',
}));

const FormFooter = styled(Box)(({ theme }) => ({
  width: 907,
  height: 36,
  position: 'relative',
}));

const SaveAndFinishButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  width: 188,
  height: 36,
  backgroundColor: '#4CAF50',
  border: '1px solid #4CAF50',
  color: '#fff',
  borderRadius: '4px',
  padding: '0px 16px',
  marginTop: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#4CAF50',
  },
}));

export const DayOffHrEdit = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();
  const [value, setValue] = useState(new Date());
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
              <Typography sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                HR göndərməsi
              </Typography>

              <IconButton aria-label="">
                <InfoOutlinedIcon
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                />
              </IconButton>
            </FormHeader>

            <FormInputsGroup>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['day', 'month', 'year']}
                  label="Day off tarixi"
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
                        width: '875px',
                        border: '1px dashed rgba(0, 0, 0, 0.38);',
                      }}
                    />
                  )}
                  disabled
                />
              </LocalizationProvider>

              <FormControl
                sx={{
                  width: '875px',
                }}
              >
                <InputLabel htmlFor="component-outlined">Növü</InputLabel>
                <Select
                  label="Actions"
                  disabled
                  sx={{
                    color: 'green',
                    border: '1px dashed rgba(0, 0, 0, 0.38);',
                  }}
                >
                  <MenuItem value={'Tam gün'}>Tam gün</MenuItem>
                  <MenuItem value={'Yarım gün'}>Yarım gün</MenuItem>
                  <MenuItem value={'Test2'}>Test2</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: '875px',
                }}
              >
                <InputLabel htmlFor="component-outlined">Nəticə</InputLabel>
                <Select label="Actions">
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
            <SaveAndFinishButton>Yadda saxla və Bitir</SaveAndFinishButton>
          </FormFooter>
        </Container>
      </PageContent>
    </>
  );
};
