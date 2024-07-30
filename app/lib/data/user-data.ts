// app/lib/data/user-data.tsx

'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache'; //clear this cache that stores the route segments in the user's browser and trigger a new request to the server\\
import { redirect } from 'next/navigation';
import { User, UserRole } from '../definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUserRoles() {
    noStore();
    try {
        const data = await sql<UserRole>`SELECT id, role, display FROM user_roles ORDER BY role ASC`;
        const users = data.rows;
        return users;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all rolls.');
    }
}

export async function fetchUsers() {
    noStore();
    try {
        const data = await sql<User>` 
        SELECT
          id,
          first_name,
          last_name,
          avatar,
          email, 
          case
            when active = 1 then 'Yes'
            else 'No'
          end as active
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
        // const user = data.rows.map((user) => ({
        //     ...user
        // }));

        // return user[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user.');
    }
}

//This schema will validate the formData before saving it to a database\\
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({ invalid_type_error: 'Please select a customer.', }),
    amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an user status.',
    }),
    date: z.string(),
});

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};

const CreateUser = FormSchema.omit({ id: true, date: true });
export async function createUser(prevState: State, formData: FormData) {
    //const rawFormData = Object.fromEntries(formData.entries()) -- For forms with many fields\\
    //const { customerId, amount, status } = CreateUser.parse({

    // Validate form fields using Zod
    const validatedFields = CreateUser.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        };
    }

    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        await sql`
     INSERT INTO users (customer_id, amount, status, date)
     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
   `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }

    // Revalidate the cache for the users page and redirect the user.
    revalidatePath('/navigation/users');
    redirect('/navigation/users');
}

const UpdateUser = FormSchema.omit({ id: true, date: true });
export async function updateUser(id: string, prevState: State, formData: FormData) {
    const validatedFields = UpdateUser.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update User.',
        };
    }

    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;

    try {
        await sql`
        UPDATE users
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update User.' };
    }

    revalidatePath('/navigation/users');
    redirect('/navigation/users');
}

export async function setUserStatus(id: string, active: number) {
    try {
        await sql`UPDATE users set active = ${active} WHERE id = ${id}`;
        revalidatePath('/navigation/users'); //triggers a new server request and re-render the table\\
        return { message: 'User Status Updated' };
    } catch (error) {
        return { message: 'Database Error: Failed to Update User.' };
    }
}  