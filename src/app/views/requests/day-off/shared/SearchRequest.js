import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from '@mui/material';

const FormContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #E0E0E0',
  borderRadius: '4px',
  padding: '12px 16px',
  marginBottom: '16px',
}));

const FormInputsGroup = styled(Box)(({ theme }) => ({}));

const FormFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const ClearButton = styled(Button)(({ theme }) => ({
  width: 82,
  height: 36,
  backgroundColor: '#EEEEEE',
  color: theme.palette.common.black,
  borderRadius: '4px',
  padding: '0 16px',

  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
}));
const SearchButton = styled(Button)(({ theme }) => ({
  width: 66,
  height: 36,
  backgroundColor: '#9B5AE1',
  color: theme.palette.common.white,
  borderRadius: '4px',
  padding: '0 16px',
  marginLeft: '12px',

  '&:hover': {
    backgroundColor: '#8B4BD0',
  },
}));

export const SearchRequest = () => {
  return (
    <>
      <FormContainer>
        <FormInputsGroup>
          <Grid container rowSpacing={1}>
            <Grid item xs={4}>
              <FormControl sx={{ minWidth: 343 }}>
                <InputLabel htmlFor="component-outlined">Ad Soyad</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  // value={values.title}
                  // onChange={handleInputChange('title')}
                  label="Adı"
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ minWidth: 343 }}>
                <InputLabel id="demo-simple-select-label">
                  Departament
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Müdriyyət</MenuItem>
                  <MenuItem value={20}>HR</MenuItem>
                  <MenuItem value={30}>IT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ minWidth: 343 }}>
                <InputLabel id="demo-simple-select-label">Vəzifə</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>User</MenuItem>
                  <MenuItem value={20}>Admin</MenuItem>
                  <MenuItem value={30}>Super Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ width: 343 }}>
                <InputLabel id="demo-simple-select-label">
                  Sorğunun statusu
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={30}>Gözləmədədir</MenuItem>
                  <MenuItem value={10}>Təsdiqləndi</MenuItem>
                  <MenuItem value={20}>Ləğv olundu</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </FormInputsGroup>

        <Divider
          sx={{
            height: '1px',
            backgroundColor: '#E0E0E0',
            margin: '8px -16px 12px -16px',
            border: 0,
            borderTop: '1px solid #c9c7c7',
          }}
        />

        <FormFooter>
          <ClearButton>Təmizlə</ClearButton>
          <SearchButton>Axtar</SearchButton>
        </FormFooter>
      </FormContainer>
    </>
  );
};
