import { useState } from 'react';
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
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  MoreHoriz as MoreHorizIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { TabPagination } from './TabPagination';

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

function newData(id, title, desc, date) {
  return { id, title, desc, date };
}

export const UsersTable = () => {
  const [rows, setRows] = useState([
    newData(nanoid(), 'Title 1', 'Desc 1', '01/01/2020'),
    newData(nanoid(), 'Title 2', 'Desc 2', '02/02/2020'),
    newData(nanoid(), 'Title 3', 'Desc 3', '03/03/2020'),
    newData(nanoid(), 'Title 4', 'Desc 4', '04/04/2020'),
    newData(nanoid(), 'Title 5', 'Desc 5', '05/05/2020'),
    newData(nanoid(), 'Title 6', 'Desc 6', '06/06/2020'),
    newData(nanoid(), 'Title 7', 'Desc 7', '07/07/2020'),
    newData(nanoid(), 'Title 8', 'Desc 8', '08/08/2020'),
    newData(nanoid(), 'Title 9', 'Desc 9', '09/09/2020'),
    newData(nanoid(), 'Title 10', 'Desc 10', '10/10/2020'),
    newData(nanoid(), 'Title 11', 'Desc 11', '11/11/2020'),
    newData(nanoid(), 'Title 12', 'Desc 12', '12/12/2020'),
    newData(nanoid(), 'Title 13', 'Desc 13', '13/13/2020'),
    newData(nanoid(), 'Title 14', 'Desc 14', '14/14/2020'),
    newData(nanoid(), 'Title 15', 'Desc 15', '15/15/2020'),
    newData(nanoid(), 'Title 16', 'Desc 16', '16/16/2020'),
    newData(nanoid(), 'Title 17', 'Desc 17', '17/17/2020'),
    newData(nanoid(), 'Title 18', 'Desc 18', '18/18/2020'),
    newData(nanoid(), 'Title 19', 'Desc 19', '19/19/2020'),
    newData(nanoid(), 'Title 20', 'Desc 19', '19/19/2020'),
    newData(nanoid(), 'Title 21', 'Desc 19', '19/19/2020'),
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="announcements table">
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
                    style={{ minWidth: '308px' }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '308px' }}>
                    {row.desc}
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '308px' }}>
                    {row.date}
                  </TableCell>
                  <TableCell align="left">
                    <IconButton onClick={() => navigate('/setting')}>
                      <VisibilityIcon sx={{ color: '#616161' }} />
                    </IconButton>
                    <IconButton
                      id="basic-button"
                      aria-controls="basic-menu"
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </>
            ))}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Sənədi yüklə</MenuItem>
              <MenuItem onClick={handleClose}>Redaktə et</MenuItem>
              <MenuItem onClick={handleClose}>Sil</MenuItem>
            </Menu>

            {emptyRows > 0 && (
              <TableRow style={{ height: 67 * emptyRows }}>
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