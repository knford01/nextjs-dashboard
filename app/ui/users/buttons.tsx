// app/ui/users/buttons.tsx

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { UserModal, DeactivateModal } from '../components/modals/UserModals';
import { red } from '@mui/material/colors';

export function AddUser() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (data: any) => {
    console.log('Add User Data:', data);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        startIcon={<PlusIcon className="h-5" />}
        sx={{
          r: 0, backgroundColor: `${theme.palette.secondary.main} !important`, color: `${theme.palette.text.primary} !important`,
          '&:hover': {
            backgroundColor: `${theme.palette.action.hover} !important`,
          },
        }}
      >
        Create User
      </Button>
      <UserModal open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
}

export function UpdateUser({ id }: { id: string }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (data: any) => {
    console.log('Update User Data:', data);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpen}
        startIcon={<PencilIcon className="w-5" />}
        sx={{
          p: 1, pr: 0, mr: 1,
          backgroundColor: `${theme.palette.info.main} !important`,
          color: `${theme.palette.text.primary} !important`,
          borderColor: `${theme.palette.text.primary} !important`,
          '&:hover': {
            backgroundColor: `${theme.palette.info.dark} !important`,
            color: `${theme.palette.text.secondary} !important`,
          },
        }}
      >
        {/* Edit */}
      </Button>
      <UserModal open={open} onClose={handleClose} onSubmit={handleSubmit} initialData={{ id }} />
    </>
  );
}

export function DeleteUser({ id }: { id: string }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    console.log('User Deactivated:', id);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleOpen}
        startIcon={<TrashIcon className="w-5" />}
        sx={{
          p: 1, pr: 0,
          backgroundColor: `${theme.palette.warning.main} !important`,
          color: `${theme.palette.text.primary} !important`,
          borderColor: `${theme.palette.text.primary} !important`,
          '&:hover': {
            backgroundColor: `${theme.palette.warning.dark} !important`,
            color: `${theme.palette.text.secondary} !important`,
          },
        }}
      >
        {/* Deactivate */}
      </Button>
      <DeactivateModal open={open} onClose={handleClose} onConfirm={handleConfirm} />
    </>
  );
}
