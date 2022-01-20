import React from 'react';
import {
  styled,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Box,
} from '@mui/material';

const DeleteConfirmDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paperWidthSm': {
    width: '370px',
    height: '171px',
  },
}));

const DeleteConfirmDialogContentText = styled(DialogContentText)(
  ({ theme }) => ({
    fontSize: '14px',
    color: '#424242',
    marginBottom: '16px',
  })
);

const CancelButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#EEEEEE',
  color: '#424242',
  width: 88,
  height: 36,
  borderRadius: 4,
  margin: '0px 12px',
  padding: '0px 16px',

  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F44336',
  color: '#fff',
  width: 48,
  height: 36,
  padding: '0px 16px',
  margin: '0px 12px',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: '#F44336',
  },
}));

export const DeleteConfirmDIalog = ({ openDialog, handleClose, onDialog }) => {
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
              Title 1
            </Box>{' '}
            elanını silmək istədiyinizə əminsiniz?
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
