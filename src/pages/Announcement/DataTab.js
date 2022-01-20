import { useRef, useState } from 'react';
import uuid from 'react-uuid';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  TableFooter,
  TablePagination,
  Paper,
  styled,
  Box,
  IconButton,
} from '@mui/material';
import { DataTabPagination } from './DataTabPagination';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { DeleteConfirmDIalog } from './DeleteConfirmDialog';
import { Routes, Route, Link } from 'react-router-dom';
import { EditAnnouncement } from './EditAnnouncement';
import { ViewAnnouncement } from './ViewAnnouncement';

const PageContent = styled(Box)(({ theme }) => ({
  padding: '26px 16px 16px 16px',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F5F5F5    ',
    color: '#424242',
    fontWeight: '700',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

function newData(isOpen, id, title, desc, author, date) {
  return { isOpen, id, title, desc, author, date };
}

export const DataTab = () => {
  const [rows, setRows] = useState([
    newData(false, uuid(), 'Title 1', 'Desc 1', 'Author 1', '01/01/2020'),
    newData(false, uuid(), 'Title 2', 'Desc 2', 'Author 2', '02/02/2020'),
    newData(false, uuid(), 'Title 3', 'Desc 3', 'Author 3', '03/03/2020'),
    newData(false, uuid(), 'Title 4', 'Desc 4', 'Author 4', '04/04/2020'),
    newData(false, uuid(), 'Title 5', 'Desc 5', 'Author 5', '05/05/2020'),
    newData(false, uuid(), 'Title 6', 'Desc 6', 'Author 6', '06/06/2020'),
    newData(false, uuid(), 'Title 7', 'Desc 7', 'Author 7', '07/07/2020'),
    newData(false, uuid(), 'Title 8', 'Desc 8', 'Author 8', '08/08/2020'),
    newData(false, uuid(), 'Title 9', 'Desc 9', 'Author 9', '09/09/2020'),
    newData(false, uuid(), 'Title 10', 'Desc 10', 'Author 10', '10/10/2020'),
    newData(false, uuid(), 'Title 11', 'Desc 11', 'Author 11', '11/11/2020'),
    newData(false, uuid(), 'Title 12', 'Desc 12', 'Author 12', '12/12/2020'),
    newData(false, uuid(), 'Title 13', 'Desc 13', 'Author 13', '13/13/2020'),
    newData(false, uuid(), 'Title 14', 'Desc 14', 'Author 14', '14/14/2020'),
    newData(false, uuid(), 'Title 15', 'Desc 15', 'Author 15', '15/15/2020'),
    newData(false, uuid(), 'Title 16', 'Desc 16', 'Author 16', '16/16/2020'),
    newData(false, uuid(), 'Title 17', 'Desc 17', 'Author 17', '17/17/2020'),
    newData(false, uuid(), 'Title 18', 'Desc 18', 'Author 18', '18/18/2020'),
    newData(false, uuid(), 'Title 19', 'Desc 19', 'Author 19', '19/19/2020'),
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);

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
  const titleRowRef = useRef();

  const handleDelete = (id) => {
    idRowRef.current = id;
  };

  const handleTitle = (title) => {
    titleRowRef.current = title;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      const newRows = [...rows];
      setRows(newRows.filter((r) => r.id !== titleRowRef.current));
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <>
      <PageContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="announcements table">
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
                  <TableRow key={uuid()} id={row.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ width: 160 }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell style={{ width: 450 }} align="left">
                      {row.desc}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.author}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      {row.date}
                    </TableCell>
                    <TableCell style={{ width: 70 }} align="left">
                      <Link to="/announcements/1">
                        <VisibilityIcon sx={{ color: '#616161' }} />
                      </Link>
                      <Link to="/requests/announcement-edit">
                        <EditIcon sx={{ m: '0 4px', color: '#616161' }} />
                      </Link>
                      <IconButton
                        onClick={() => {
                          handleClickOpen();
                          handleDelete(row.id);
                          handleTitle(row.title);
                        }}
                      >
                        <DeleteIcon sx={{ color: '#616161' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </>
              ))}
              <DeleteConfirmDIalog
                openDialog={openDialog}
                handleClose={handleClose}
                onDialog={areUSureDelete}
              />

              {emptyRows > 0 && (
                <TableRow style={{ height: 55.7 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

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
                        // todo: align number with the left side of the rows per page select
                      },
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={DataTabPagination}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </PageContent>

      <Routes>
        <Route path="/announcement/1" element={<ViewAnnouncement />} />
        <Route
          path="/requests/announcement-edit"
          element={<EditAnnouncement />}
        />
      </Routes>
    </>
  );
};
