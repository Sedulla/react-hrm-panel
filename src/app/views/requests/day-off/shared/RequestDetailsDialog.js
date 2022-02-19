import {
  Dialog,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import {
  RequestDetailsDialogTitle,
  RequestDetailsDialogContent,
  RequestDetailsDialogCloseButton,
} from '../../../../styles/Requests.styled';

export const RequestDetailsDialog = ({ open, handleClick }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <RequestDetailsDialogTitle id="dialog-title">
          Sorğunun detalları
        </RequestDetailsDialogTitle>
        <RequestDetailsDialogContent dividers={'paper'}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ width: 270, fontWeight: 'bold' }}
                  component="th"
                >
                  A.S.A
                </TableCell>
                <TableCell sx={{ width: 270 }}>Hüseyn Lətifov İ.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ width: 270, fontWeight: 'bold' }}
                  component="th"
                >
                  Korporativ nömrə
                </TableCell>
                <TableCell>+994 55 434 43 43</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ width: 270, fontWeight: 'bold' }}
                  component="th"
                >
                  Vəzifə
                </TableCell>
                <TableCell>Sürücü</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }} component="th">
                  Şöbə
                </TableCell>
                <TableCell>Əsas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                  component="th"
                >
                  Tarix
                </TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>25/05/2021</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </RequestDetailsDialogContent>

        <DialogActions>
          <RequestDetailsDialogCloseButton onClick={handleClick}>
            Bağla
          </RequestDetailsDialogCloseButton>
        </DialogActions>
      </Dialog>
      ;
    </>
  );
};
