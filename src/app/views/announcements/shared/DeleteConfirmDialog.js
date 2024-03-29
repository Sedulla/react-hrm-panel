import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Box,
} from '@mui/material';
import {
  DeleteButton,
  CancelButton,
  DeleteConfirmDialog,
  DeleteConfirmDialogContentText,
} from '../../../styles/Global.styled';

export const DeleteConfirmDIalog = ({
  openDialog,
  handleClose,
  onDialog,
  titleRow,
}) => {
  return (
    <>
      <DeleteConfirmDialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Elanın silinməsi'}</DialogTitle>
        <Divider />
        <DialogContent>
          <DeleteConfirmDialogContentText id="alert-dialog-description">
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              {titleRow}
            </Box>{' '}
            elanı silmək istədiyinizə əminsiniz?
          </DeleteConfirmDialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <CancelButton onClick={() => onDialog(false)}>İmtina et</CancelButton>
          <DeleteButton onClick={() => onDialog(true)}>Sil</DeleteButton>
        </DialogActions>
      </DeleteConfirmDialog>
    </>
  );
};
