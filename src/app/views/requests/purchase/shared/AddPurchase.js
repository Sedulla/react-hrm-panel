import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  TextField,
  Breadcrumbs,
  Link as MuiLink,
  OutlinedInput,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { PagesNav } from '../../../../styles/PagesNav.styled';
import { useNav } from '../../../../contexts/NavContextProvider';
import {
  PageContent,
  PageHeader,
  Container,
  FormContainer,
  FormHeader,
  FormInputsGroup,
  FormFooter,
  SaveButton,
  StartEndDateBox,
  FormHeaderText,
} from '../../../../styles/Requests.styled';
import { FormButtonsBox } from '../../../../styles/Global.styled';

export const NewPurchase = () => {
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
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Satınalma
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Yeni sorğu
                </Typography>
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
                  width: 221,
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
          <FormContainer>
            <FormHeader>
              <FormHeaderText> Sorğunun formalaşdırılması</FormHeaderText>
            </FormHeader>
            <FormInputsGroup>
              <FormControl>
                <InputLabel htmlFor="description-of-problem">
                  Problemin təsviri
                </InputLabel>
                <OutlinedInput
                  sx={{
                    width: 875,
                  }}
                  id="description-of-problem"
                  type="text"
                  placeholder="Sadə bir təsvir"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="result">Nəticə</InputLabel>
                <Select sx={{ width: '875px' }} id="result">
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
            <FormButtonsBox>
              <SaveButton>Yadda saxla və Yönləndir</SaveButton>
            </FormButtonsBox>
          </FormFooter>
        </Container>
      </PageContent>
    </>
  );
};
