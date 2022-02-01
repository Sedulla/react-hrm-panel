import { styled, Box } from '@mui/material';
import { UsersTable } from './shared/UsersTable';

const PageContent = styled(Box)(({ theme }) => ({}));

export const RequestsPage = () => {
  return (
    <>
      <PageContent>
        <UsersTable />
      </PageContent>
    </>
  );
};
