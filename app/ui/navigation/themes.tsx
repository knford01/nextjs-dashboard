// app/themes.ts

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
        action: {
            hover: '#e0e0e0', // Light theme hover color
            selected: '#d3d3d3', // Light theme selected color
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                },
            },
        },
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
        action: {
            hover: '#555555', // Dark theme hover color
            selected: '#777777', // Dark theme selected color
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#333333',
                    color: '#ffffff',
                },
            },
        },
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
        action: {
            hover: '#145a86', // Default theme hover color
            selected: '#1976d2', // Default theme selected color
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1E4258',
                    color: '#ffffff',
                },
            },
        },
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
});
