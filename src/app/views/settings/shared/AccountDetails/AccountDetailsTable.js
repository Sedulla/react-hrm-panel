import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import {
  TableContainer,
  TableHeaderCell,
} from '../../../../styles/Settings.styled';

export const AccountDetailsTable = () => {
  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableHeaderCell component="th" scope="row">
                İstifadəçi adı
              </TableHeaderCell>
              <TableCell component="td">aydinaab</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell component="th" scope="row">
                Elektron poçt
              </TableHeaderCell>
              <TableCell component="td">aydinabb@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell component="th">Əlaqə nömrəsi</TableHeaderCell>
              <TableCell component="td">9945555555</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell
                component="th"
                scope="row"
                sx={{ borderBottom: 'none' }}
              >
                İstifadəçi rolları
              </TableHeaderCell>
              <TableCell component="td" sx={{ borderBottom: 'none' }}>
                Worker
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
