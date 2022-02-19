import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from '@mui/material';
import { ClearButton, SearchButton } from '../../../../styles/Requests.styled';

const SearchFormContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #E0E0E0',
  borderRadius: '4px',
  padding: '12px 16px',
  margin: '11px 0 16px 0',
}));

const SearchFormInputsGroup = styled(Box)(({ theme }) => ({}));

const SearchFormFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const SearchRequest = () => {
  return (
    <>
      <SearchFormContainer>
        <SearchFormInputsGroup>
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
        </SearchFormInputsGroup>

        <Divider
          sx={{
            height: '1px',
            backgroundColor: '#E0E0E0',
            margin: '8px -16px 12px -16px',
            border: 0,
            borderTop: '1px solid #c9c7c7',
          }}
        />

        <SearchFormFooter>
          <ClearButton>Təmizlə</ClearButton>
          <SearchButton>Axtar</SearchButton>
        </SearchFormFooter>
      </SearchFormContainer>
    </>
  );
};
