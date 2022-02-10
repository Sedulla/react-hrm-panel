import { Grid } from '@mui/material';
import { AccountDetailsTable } from './AccountDetailsTable';
import { AccountDetailsProfile } from './AccountDetailsProfile';

export const AccountDetails = () => {
  return (
    <>
      <Grid container md={9} lg={8} sx={{ gap: '29px' }}>
        <Grid item md={4}>
          <AccountDetailsProfile />
        </Grid>

        <Grid item md={7}>
          <AccountDetailsTable />
        </Grid>
      </Grid>
    </>
  );
};
