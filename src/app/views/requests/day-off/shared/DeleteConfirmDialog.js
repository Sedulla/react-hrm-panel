import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Box,
} from '@mui/material';
import {
  CancelButton,
  DeleteButton,
  DeleteConfirmDialog,
  DeleteConfirmDialogContentText,
} from '../../../../styles/Global.styled';

export const DeleteConfirmDIalog = ({
  openDialog,
  handleDialogClose,
  onDialog,
  infoRow,
}) => {
  return (
    <>
      <DeleteConfirmDialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'sorğunun silinməsi'}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DeleteConfirmDialogContentText id="alert-dialog-description">
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              {infoRow}
            </Box>
            'ə aid sorğuyu silmək istədiyinizə əminsiniz?
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
