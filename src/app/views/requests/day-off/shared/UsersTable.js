import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Paper,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { TabPagination } from './TabPagination';
import { StyledTableCell } from '../../../../styles/Global.styled';
import { DeleteConfirmDIalog } from './DeleteConfirmDialog';

function newData(id, info, date, status) {
  return { id, info, date, status };
}

export const UsersTable = () => {
  const [rows, setRows] = useState([
    newData(nanoid(), 'User 1', '01/01/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 2', '02/02/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 3', '03/03/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 4', '04/04/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 5', '05/05/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 6', '06/06/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 7', '07/07/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 8', '08/08/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 9', '09/09/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 10', '10/10/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 11', '11/11/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 12', '12/12/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 13', '13/13/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 14', '14/14/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 15', '15/15/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 16', '16/16/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 17', '17/17/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 18', '18/18/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 19', '19/19/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 20', '19/19/2020', 'Təsdiqləndi'),
    newData(nanoid(), 'User 21', '19/19/2020', 'Təsdiqləndi'),
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialog, setDialog] = useState({
    infoRow: '',
  });

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDialogData = (infoRow) => {
    setDialog({ infoRow });
  };

  const handleDialogClick = () => {
    setOpenDialog(!openDialog);
  };

  const idRowRef = useRef();

  const handleDelete = (id) => {
    const index = rows.findIndex((row) => row.id === id);

    handleDialogData(rows[index].info);
    idRowRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      const newRows = [...rows];
      setRows(newRows.filter((r) => r.id !== idRowRef.current));
      handleDialogClick();
    } else {
      handleDialogClick();
    }
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: '11px' }}>
        <Table aria-label="users table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Ad Soyad Ata</StyledTableCell>
              <StyledTableCell align="left">Tarix</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <>
                <TableRow key={row.id} id={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ minWidth: 308 }}
                  >
                    {row.info}
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 308 }}>
                    {row.date}
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 308 }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="left">
                    <Link to="/requests/day-off/view/:id">
                      <VisibilityIcon sx={{ color: '#616161' }} />
                    </Link>
                    <Link to="/requests/day-off/edit/department-head/">
                      <EditIcon sx={{ m: '0 11px', color: '#616161' }} />
                    </Link>
                    <DeleteIcon
                      sx={{
                        color: '#616161',
                        '&:hover:': {
                          cursor: 'pointer',
                        },
                      }}
                      onClick={() => {
                        handleDialogClick();
                        handleDelete(row.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              </>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 67 * emptyRows }} key={nanoid()}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <DeleteConfirmDIalog
            openDialog={openDialog}
            handleClose={handleDialogClick}
            onDialog={areUSureDelete}
            infoRow={dialog.infoRow}
          />

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                colSpan={5}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                    style: {
                      borderBottom: '1px solid #000',
                    },
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TabPagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
