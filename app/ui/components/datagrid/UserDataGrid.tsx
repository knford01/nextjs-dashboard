// app/navigation/settings/users/UserDataGrid.tsx

'use client';

import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import DataGridExporter from './DataGridExporter';
import { User } from '@/app/lib/definitions';

interface UserDataGridProps {
    users: User[];
    filterId?: string;
}

const columns: GridColDef[] = [
    // {
    //     field: 'id',
    //     headerName: 'ID',
    //     width: 250,
    //     renderCell: (params) => (
    //         <Tooltip title={params.value || ''}>
    //             <div>{params.value}</div>
    //         </Tooltip>
    //     ),
    // },
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 60,
        sortable: true,
        renderCell: (params) => (
            <img
                src={params.value}
                alt="Avatar"
                style={{ width: '35px', height: '35px', borderRadius: '50%', marginTop: '8px' }}
            />

        ),
    },
    {
        field: 'first_name',
        headerName: 'First Name',
        width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value || ''}>
                <div>{params.value}</div>
            </Tooltip>
        ),
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        width: 200,
        renderCell: (params) => (
            <Tooltip title={params.value || ''}>
                <div>{params.value}</div>
            </Tooltip>
        ),
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 400,
        renderCell: (params) => (
            <Tooltip title={params.value || ''}>
                <div>{params.value}</div>
            </Tooltip>
        ),
    },
    {
        field: 'active',
        headerName: 'Active',
        type: 'string',
        width: 400,
        renderCell: (params) => (
            <Tooltip title={params.value || ''}>
                <div>{params.value}</div>
            </Tooltip>
        ),
    },
    // {
    //     field: 'password',
    //     headerName: 'Password',
    //     type: 'string',
    //     sortable: true,
    //     width: 200,
    // },
];

const UserDataGrid: React.FC<UserDataGridProps> = ({ users, filterId }) => {

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Box sx={{ mb: 1 }}>
                <DataGridExporter data={users} fileName="users_export.xlsx" />
            </Box>
            <DataGrid
                filterModel={{
                    items: filterId ? [
                        {
                            field: 'id',
                            operator: 'equals',
                            value: filterId,
                        },
                    ] : [],
                }}
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default UserDataGrid;
