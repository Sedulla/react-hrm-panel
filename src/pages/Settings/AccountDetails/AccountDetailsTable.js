import { Table, TableBody, TableCell, TableRow } from '@mui/material';

export const AccountDetailsTable = () => {
  return (
    <>
      <Table
        sx={{
          marginLeft: '45px',
          padding: '16px',
          minWidth: '552px',
          minHeight: '195px',
          borderCollapse: 'separate',
          marginTop: '-15px',
        }}
        aria-label="simple table"
      >
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderTop: '1px solid #e0e0e0',
                borderLeft: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',
                borderTopLeftRadius: '4px',
                width: '200px',
                color: '#BDBDBD',
              }}
            >
              İstifadəçi adı
            </TableCell>
            <TableCell
              component="td"
              scope="row"
              sx={{
                borderTop: '1px solid #e0e0e0',
                borderRight: '1px solid #e0e0e0',
                borderTopRightRadius: '4px',
              }}
            >
              aydinaab
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderLeft: '1px solid #e0e0e0',
                width: '200px',
                color: '#BDBDBD',
              }}
            >
              Elektron poçt
            </TableCell>
            <TableCell
              component="td"
              scope="row"
              sx={{
                borderRight: '1px solid #e0e0e0',
              }}
            >
              aydinabb@gmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderLeft: '1px solid #e0e0e0',
                width: '200px',
                color: '#BDBDBD',
              }}
            >
              Əlaqə nömrəsi
            </TableCell>
            <TableCell
              component="td"
              scope="row"
              sx={{
                borderRight: '1px solid #e0e0e0',
              }}
            >
              9945555555
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderLeft: '1px solid #e0e0e0',
                borderBottomLeftRadius: '4px',
                width: '200px',
                color: '#BDBDBD',
              }}
            >
              İstifadəçi rolları
            </TableCell>
            <TableCell
              component="td"
              scope="row"
              sx={{
                borderRight: '1px solid #e0e0e0',
                borderBottomRightRadius: '4px',
              }}
            >
              Worker
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
