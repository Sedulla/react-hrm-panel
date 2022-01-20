import { useState } from 'react';
import {
  AppBar,
  Box,
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: 907,
  margin: '20px auto',
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
  opacity: 0.5,
}));

export const EditAnnouncement = () => {
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
                  sx={{
                    width: '875px',
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
                    width: '875px',
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
                    width: '875px',
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
