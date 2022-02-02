import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  styled,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  TextField,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '16px',
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
  fontSize: '1.125rem',
  fontWeight: 'bold',
  padding: '0px 20px',
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

const SaveAndRedirectButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  width: 188,
  height: 36,
  backgroundColor: '#4CAF50',
  border: '1px solid #4CAF50',
  borderRadius: '4px',
  marginTop: '16px',
  padding: '0px 16px',
  color: '#fff',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#4CAF50',
  },
}));

export const AddNewRequest = () => {
  const [value, setValue] = useState(new Date());
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
                <Typography color="text.primary"> Yeni sorğu</Typography>
              </Breadcrumbs>
            </div>
          </Toolbar>
        </PagesNav>

        <PageHeader>
          <Toolbar
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
            <Typography
              sx={{
                color: '#9B5AE1',
              }}
            >
              Sorğunun formalaşdırılması
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <FormContainer>
            <FormHeader>Sorğunun formalaşdırılması</FormHeader>
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
                      sx={{ width: '875px' }}
                    />
                  )}
                />
              </LocalizationProvider>

              <FormControl>
                <InputLabel htmlFor="component-outlined">Növü</InputLabel>
                <Select sx={{ width: '875px' }} label="Actions">
                  <MenuItem value={'Tam gün'}>Tam gün</MenuItem>
                  <MenuItem value={'Yarım gün'}>Yarım gün</MenuItem>
                  <MenuItem value={'Test2'}>Test2</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="component-outlined">Nəticə</InputLabel>
                <Select sx={{ width: '875px' }} label="Actions">
                  <MenuItem value={'Departament rəhbərin göndərməsi'}>
                    Departament rəhbərin göndərməsi
                  </MenuItem>
                  <MenuItem value={'Test2'}>Test2</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
            </FormInputsGroup>
          </FormContainer>
          <FormFooter>
            <SaveAndRedirectButton>
              Yadda saxla və Yönləndir
            </SaveAndRedirectButton>
          </FormFooter>
        </Container>
      </PageContent>
    </>
  );
};
