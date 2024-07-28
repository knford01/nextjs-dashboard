// app/lib/data/user-data.tsx

import { sql } from '@vercel/postgres';
import {
    User
} from '../definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUsers() {
    noStore();
    try {
        const data = await sql<User>`
        SELECT
          id,
          first_name,
          email, 
          '' as password
        FROM users
        ORDER BY first_name ASC`;

        const users = data.rows;
        return users;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all users.');
    }
}

export async function fetchUserById(id: string) {
    noStore();
    try {
        const data = await sql<User>`
        SELECT
          id,
          first_name,
          email, 
          '' as password
        FROM users
        WHERE id = ${id};`;

        return data;

        //May need to do it this way later\\
        // const invoice = data.rows.map((invoice) => ({
        //     ...invoice
        // }));

        // return invoice[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
    }
}