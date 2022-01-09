import { Grid } from '@mui/material';
import { AccountDetailsTable } from './AccountDetailsTable';
import { AccountDetailsProfile } from './AccountDetailsProfile';

export const AccountDetails = () => {
  return (
    <>
      <Grid
        container
        item
        md={9}
        lg={8}
        justifyContent="flex-start"
        sx={{ marginLeft: '25px' }}
      >
        <Grid item md={4} lg={3}>
          <AccountDetailsProfile />
        </Grid>

        <Grid item md={5}>
          <AccountDetailsTable />
        </Grid>
      </Grid>
    </>
  );
};
