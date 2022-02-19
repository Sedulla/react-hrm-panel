import { useRef, useState } from 'react';
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
import {
  Container,
} from '../../../styles/Announcements.styled';
import { StyledTableCell } from '../../../styles/Global.styled';
import { Link } from 'react-router-dom';
import { AnnouncementsTabPagination } from './AnnouncementsTabPagination';
import { DeleteConfirmDIalog } from './DeleteConfirmDialog';

function newData(isOpen, id, title, desc, author, date) {
  return { isOpen, id, title, desc, author, date };
}

export const AnnouncementsTable = () => {
  const [rows, setRows] = useState([
    newData(false, nanoid(), 'Title 1', 'Desc 1', 'Author 1', '01/01/2020'),
    newData(false, nanoid(), 'Title 2', 'Desc 2', 'Author 2', '02/02/2020'),
    newData(false, nanoid(), 'Title 3', 'Desc 3', 'Author 3', '03/03/2020'),
    newData(false, nanoid(), 'Title 4', 'Desc 4', 'Author 4', '04/04/2020'),
    newData(false, nanoid(), 'Title 5', 'Desc 5', 'Author 5', '05/05/2020'),
    newData(false, nanoid(), 'Title 6', 'Desc 6', 'Author 6', '06/06/2020'),
    newData(false, nanoid(), 'Title 7', 'Desc 7', 'Author 7', '07/07/2020'),
    newData(false, nanoid(), 'Title 8', 'Desc 8', 'Author 8', '08/08/2020'),
    newData(false, nanoid(), 'Title 9', 'Desc 9', 'Author 9', '09/09/2020'),
    newData(false, nanoid(), 'Title 10', 'Desc 10', 'Author 10', '10/10/2020'),
    newData(false, nanoid(), 'Title 11', 'Desc 11', 'Author 11', '11/11/2020'),
    newData(false, nanoid(), 'Title 12', 'Desc 12', 'Author 12', '12/12/2020'),
    newData(false, nanoid(), 'Title 13', 'Desc 13', 'Author 13', '13/13/2020'),
    newData(false, nanoid(), 'Title 14', 'Desc 14', 'Author 14', '14/14/2020'),
    newData(false, nanoid(), 'Title 15', 'Desc 15', 'Author 15', '15/15/2020'),
    newData(false, nanoid(), 'Title 16', 'Desc 16', 'Author 16', '16/16/2020'),
    newData(false, nanoid(), 'Title 17', 'Desc 17', 'Author 17', '17/17/2020'),
    newData(false, nanoid(), 'Title 18', 'Desc 18', 'Author 18', '18/18/2020'),
    newData(false, nanoid(), 'Title 19', 'Desc 19', 'Author 19', '19/19/2020'),
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialog, setDialog] = useState({
    titleRow: '',
  });

  const handleDialog = (titleRow) => {
    setDialog({ titleRow });
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

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

  const idRowRef = useRef();

  const handleDelete = (id) => {
    const index = rows.findIndex((row) => row.id === id);

    handleDialog(rows[index].title);
    idRowRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      const newRows = [...rows];
      setRows(newRows.filter((r) => r.id !== idRowRef.current));
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="announcements table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Adı</StyledTableCell>
                <StyledTableCell align="left">Təsviri</StyledTableCell>
                <StyledTableCell align="left">Əlavə edən şəxs</StyledTableCell>
                <StyledTableCell align="left">
                  Əlavə edilmə tarixi
                </StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <>
                  <TableRow key={nanoid()} id={row.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ width: 160 }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell style={{ width: 250 }} align="left">
                      {row.desc}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.author}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.date}
                    </TableCell>

                    <TableCell style={{ width: 90 }} align="left">
                      <Link to="/announcements/view/:id">
                        <VisibilityIcon sx={{ color: '#616161' }} />
                      </Link>
                      <Link to="/announcements/edit/:id">
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
                          handleClickOpen();
                          handleDelete(row.id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </>
              ))}

              {emptyRows > 0 && (
                <TableRow key={nanoid()} style={{ height: 55.7 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            <DeleteConfirmDIalog
              openDialog={openDialog}
              handleClose={handleClose}
              onDialog={areUSureDelete}
              titleRow={dialog.titleRow}
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
                  ActionsComponent={AnnouncementsTabPagination}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
