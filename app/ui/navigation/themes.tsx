// app/ui/navitation/themes.ts

import { createTheme } from '@mui/material/styles';
import type { } from '@mui/x-data-grid/themeAugmentation';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#f5f5f5',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                },
                columnHeaders: {
                    backgroundColor: '#f5f5f5',
                },
                cell: {
                    borderBottom: '1px solid #ddd',
                },
                footerContainer: {
                    backgroundColor: '#f5f5f5',
                },
            },
        },
    },
    // Add other component customizations here
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#333333',
        },
        secondary: {
            main: '#424242',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#424242',
                    color: '#ffffff',
                },
                columnHeaders: {
                    backgroundColor: '#333333',
                },
                cell: {
                    borderBottom: '1px solid #555',
                },
                footerContainer: {
                    backgroundColor: '#333333',
                },
            },
        },
    },
    // Add other component customizations here
});

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#e3f2fd',
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000',
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                },
                columnHeaders: {
                    backgroundColor: '#1976d2',
                },
                cell: {
                    borderBottom: '1px solid #ddd',
                },
                footerContainer: {
                    backgroundColor: '#e3f2fd',
                },
            },
        },
    },
    // Add other component customizations here
});
