import { Edit as EditIcon } from '@mui/icons-material';
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { EditAnnouncement } from './EditAnnouncement';

const PageContent = styled(Box)(({ theme }) => ({}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  margin: '40px auto',
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
  justifyContent: 'space-between',
  padding: '16px',
}));

export const ViewAnnouncement = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <EditAnnouncement />
      ) : (
        <PageContent>
          <Container>
            <FormContainer>
              <FormHeader>
                <Typography sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                  Elanın təsviri
                </Typography>
                <IconButton aria-label="" onClick={() => setIsEdit(!isEdit)}>
                  <EditIcon
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  />
                </IconButton>
              </FormHeader>
              <Table sx={{ padding: '0 16px', borderCollapse: 'separate' }}>
                <TableBody>
                  <TableRow
                    sx={{
                      verticalAlign: 'top',
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        width: '244px',
                        verticalAlign: 'top',
                        color: '#9E9E9E',
                      }}
                    >
                      <Typography>Adı</Typography>
                    </TableCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ width: '537px', color: '#212121' }}
                    >
                      <Typography> lorem</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      verticalAlign: 'top',
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: 'none', color: '#9E9E9E' }}
                    >
                      <Typography> Təsviri</Typography>
                    </TableCell>
                    <TableCell
                      component="td"
                      scope="row"
                      sx={{ borderBottom: 'none', color: '#212121' }}
                    >
                      <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore possimus harum officiis explicabo nemo
                        repellat ab, saepe est, cum rem quisquam mollitia atque
                        adipisci optio? Quaerat voluptate sunt est magni.
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </FormContainer>
          </Container>
        </PageContent>
      )}
    </>
  );
};
