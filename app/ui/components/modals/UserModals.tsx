// app/ui/components/modals/UserModals.tsx

import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface UserModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
    initialData?: any;
}

export const UserModal: React.FC<UserModalProps> = ({ open, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData || {});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', mt: '20vh', width: 400, borderRadius: 2 }}>
                <Typography variant="h6">{initialData ? 'Edit User' : 'Add User'}</Typography>
                <TextField label="First Name" name="first_name" value={formData.first_name || ''} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                <TextField label="Last Name" name="last_name" value={formData.last_name || ''} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                <TextField label="Email" name="email" value={formData.email || ''} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>Submit</Button>
            </Box>
        </Modal>
    );
};

interface DeactivateModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const DeactivateModal: React.FC<DeactivateModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', mt: '20vh', width: 400, borderRadius: 2 }}>
                <Typography variant="h6">Confirm Deactivation</Typography>
                <Typography sx={{ mt: 2 }}>Are you sure you want to deactivate this user?</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="contained" color="primary" onClick={onConfirm}>Yes</Button>
                    <Button variant="contained" color="secondary" onClick={onClose}>No</Button>
                </Box>
            </Box>
        </Modal>
    );
};
