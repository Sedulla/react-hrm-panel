import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  styled,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';

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
  margin: '0 auto',
  width: 907,
  height: 336,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  height: 284,
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

const FormButtonsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: 36,
  marginTop: '30px',
  gap: '16px',
}));

const SaveButton = styled(Button)(({ theme }) => ({
  width: 108,
  height: 36,
  border: '1px solid #4CAF50',
  borderRadius: '4px',
  padding: '0px 16px',
  color: ' #4CAF50',
  fontWeight: 500,
}));

const ConcludeButton = styled(Button)(({ theme }) => ({
  width: 92,
  height: 36,
  padding: '0px 16px',
  color: theme.palette.common.white,
  backgroundColor: '#4CAF50',
  '&:hover': {
    backgroundColor: '#388E3C',
  },
}));

export const AddNewAnnouncement = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });

  const handleInputChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };

  return (
    <>
      <PageContent>
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
              Elanın formalaşdırılması
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <FormContainer>
            <FormHeader>Elanın formalaşdırılması</FormHeader>
            <FormInputsGroup>
              <FormControl>
                <InputLabel htmlFor="component-outlined">Adı</InputLabel>
                <OutlinedInput
                  sx={{ width: '875px' }}
                  id="component-outlined"
                  value={values.title}
                  onChange={handleInputChange('title')}
                  label="Title"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="component-outlined">Təsviri</InputLabel>
                <OutlinedInput
                  sx={{ width: '875px' }}
                  id="component-outlined"
                  value={values.desc}
                  onChange={handleInputChange('desc')}
                  label="Description"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="component-outlined">
                  Əməliyyatlar
                </InputLabel>
                <Select sx={{ width: '875px' }} label="Actions">
                  <MenuItem value={''}>Təyin olunmadı</MenuItem>
                  <MenuItem value={'Paylaş'}>Paylaş</MenuItem>
                  <MenuItem value={'Test2'}>Test2</MenuItem>
                  <MenuItem value={'Test3'}>Test3</MenuItem>
                </Select>
              </FormControl>
            </FormInputsGroup>
            <FormButtonsBox>
              <SaveButton>Yadda Saxla</SaveButton>
              <ConcludeButton>Sonlandır</ConcludeButton>
            </FormButtonsBox>
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
