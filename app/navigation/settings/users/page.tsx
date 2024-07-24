// app/navigation/settings/users/page.tsx

import * as React from 'react';
import Container from '@mui/material/Container';
import { fetchUsers } from '@/app/lib/data/user-data';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the UserDataGrid component
const UserDataGrid = dynamic(() => import('./UserDataGrid'), { ssr: false });

export const metadata: Metadata = {
    title: 'Users',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        id?: string;
    };
}) {
    const users = await fetchUsers();
    console.log(users);

    return (
        <Container maxWidth="xl" sx={{ m: 2, width: '100%', height: '85%', backgroundColor: '#f5f5f5' }}>
            <UserDataGrid users={users} filterId={searchParams?.id} />
        </Container>
    );
}
