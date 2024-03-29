import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  styled,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import {
  Container,
  FormContainer,
  FormHeader,
  FormHeaderText,
  PageContent,
  PageHeader,
  PagesNav,
} from '../../../styles/Global.styled';
import { useNav } from '../../../contexts/NavContextProvider';
import { KeyboardArrowDown } from '@mui/icons-material';

const FormInputsGroup = styled(Box)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '11px',
  opacity: 0.5,
}));

export const EditAnnouncement = () => {
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
                <Typography color="text.primary"> Elan</Typography>
                <Typography color="text.primary"> Redaktə</Typography>
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
              Elanın formalaşdırılması
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <FormContainer>
            <FormHeader>
              <FormHeaderText> Elanın formalaşdırılması</FormHeaderText>
            </FormHeader>
            <FormInputsGroup>
              <FormControl>
                <InputLabel htmlFor="component-outlined">Adı</InputLabel>
                <OutlinedInput
                  sx={{
                    width: 875,
                    border: '1px dashed rgba(0, 0, 0, 0.42)',
                  }}
                  id="component-outlined"
                  value={values.title}
                  onChange={handleInputChange('title')}
                  label="Title"
                  disabled
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="component-outlined">Təsviri</InputLabel>
                <OutlinedInput
                  sx={{
                    width: 875,
                    border: '1px dashed rgba(0, 0, 0, 0.42)',
                  }}
                  id="component-outlined"
                  value={values.desc}
                  onChange={handleInputChange('desc')}
                  label="Description"
                  disabled
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="component-outlined">
                  Əməliyyatlar
                </InputLabel>
                <Select
                  sx={{
                    width: 875,
                    border: '1px dashed rgba(0, 0, 0, 0.42)',
                  }}
                  label="Actions"
                  disabled
                >
                  <MenuItem value={''}>Təyin olunmadı</MenuItem>
                  <MenuItem value={'Paylaş'}>Paylaş</MenuItem>
                  <MenuItem value={'Test2'}>Test2</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
            </FormInputsGroup>
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
