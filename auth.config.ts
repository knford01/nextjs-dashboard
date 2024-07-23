import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',//user will be redirected to our custom login page, rather than the NextAuth.js default page\\
    },
    callbacks: {
        //authorized callback is used to verify if the request is authorized to access a page via Next.js Middleware\\
        authorized({ auth, request: { nextUrl } }) {//auth property contains the user's session, and the request property contains the incoming request\\
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/navigation');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/navigation', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;