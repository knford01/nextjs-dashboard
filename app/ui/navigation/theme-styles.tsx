// import { createTheme, styled } from '@mui/material/styles';

// export const themes = {
//     light: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#1976d2' }, // Blue
//             secondary: { main: '#dc004e' }, // Pink
//             background: { default: '#f5f5f5', paper: '#ffffff' },
//             text: { primary: '#000000', secondary: '#555555' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#1976d2' } } },
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#ffffff' } } },
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#1976d2', color: '#ffffff' },
//                         '&:hover': { backgroundColor: '#e3f2fd' },
//                     }
//                 }
//             },
//         },
//     }),

//     dark: createTheme({
//         palette: {
//             mode: 'dark',
//             primary: { main: '#90caf9' }, // Light Blue
//             secondary: { main: '#f48fb1' }, // Pink
//             background: { default: '#121212', paper: '#424242' },
//             text: { primary: '#ffffff', secondary: '#aaaaaa' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#424242' } } },
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#303030' } } },
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#424242', color: '#ffffff' },
//                         '&:hover': { backgroundColor: '#616161' },
//                     }
//                 }
//             },
//         },
//     }),

//     coptad: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#254E58' },
//             secondary: { main: '#254E58' },
//             background: { default: '#112D32', paper: '#88BDBC' },
//             text: { primary: '#254E58', secondary: '#254E58' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#254E58' } } },//Top Nav
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#254E58' } } },//Side Nav
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#4F4A41', color: '#88BDBC' },
//                         '&:hover': { backgroundColor: '#112D32' },
//                     }
//                 }
//             },
//             MuiSvgIcon: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for icons
//                     },
//                 },
//             },
//             MuiTypography: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for link fonts
//                     },
//                 },
//             },
//             MuiListSubheader: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for the ListSubheader
//                         backgroundColor: '#88BDBC', // optional: change this to match the background
//                     },
//                 },
//             },
//             MuiDataGrid: {
//                 styleOverrides: {
//                     root: {
//                         '& .MuiDataGrid-cell': {
//                             backgroundColor: '#88BDBC', // Background color for cells
//                             color: '#ffffff', // Font color for cells
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#112D32', // Background color for column headers
//                             color: '#ffffff', // Font color for column headers
//                         },
//                         '& .MuiDataGrid-footerContainer': {
//                             backgroundColor: '#112D32', // Background color for footer
//                         },
//                         '& .MuiDataGrid-toolbarContainer': {
//                             backgroundColor: '#f5f5f5', // Background color for toolbar
//                         },
//                         '& .MuiDataGrid-selectedRow': {
//                             backgroundColor: '#e0f7fa', // Background color for selected rows
//                         },
//                     },
//                 },
//             },
//         },
//     }),

//     facebook: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#1877f2' }, // Facebook Blue
//             secondary: { main: '#f7f7f7' }, // Light Grey
//             background: { default: '#ffffff', paper: '#f0f2f5' },
//             text: { primary: '#000000', secondary: '#606770' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#1877f2' } } },
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#f0f2f5' } } },
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#1877f2', color: '#ffffff' },
//                         '&:hover': { backgroundColor: '#e7f3ff' },
//                     }
//                 }
//             },
//         },
//     }),

//     linkedin: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#0077b5' }, // LinkedIn Blue
//             secondary: { main: '#313335' }, // Dark Grey
//             background: { default: '#ffffff', paper: '#f3f2ef' },
//             text: { primary: '#313335', secondary: '#86888a' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#0077b5' } } },
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#f3f2ef' } } },
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#0077b5', color: '#ffffff' },
//                         '&:hover': { backgroundColor: '#cde7fa' },
//                     }
//                 }
//             },
//         },
//     }),

//     nature: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#31708E' },
//             secondary: { main: '#31708E' },
//             background: { default: '#687664', paper: '#8FC1E3' },
//             text: { primary: '#ffffff', secondary: '#31708E' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#31708E' } } }, // Top Nav
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#31708E' } } }, // Side Nav
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#8FC1E3', color: '#8FC1E3' },
//                         '&:hover': { backgroundColor: '#5085A5' },
//                     }
//                 }
//             },
//             MuiSvgIcon: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for icons
//                     },
//                 },
//             },
//             MuiTypography: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for link fonts
//                     },
//                 },
//             },
//             MuiListSubheader: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for the ListSubheader
//                         backgroundColor: '#687664', // optional: change this to match the background
//                     },
//                 },
//             },
//             // Updated MuiDataGrid overrides
//             MuiDataGrid: {
//                 styleOverrides: {
//                     root: {
//                         '& .MuiDataGrid-cell': {
//                             backgroundColor: '#8FC1E3', // Background color for cells
//                             color: '#ffffff', // Font color for cells
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#687664', // Background color for column headers
//                             color: '#ffffff', // Font color for column headers
//                         },
//                         '& .MuiDataGrid-footerContainer': {
//                             backgroundColor: '#687664', // Background color for footer
//                         },
//                         '& .MuiDataGrid-toolbarContainer': {
//                             backgroundColor: '#f5f5f5', // Background color for toolbar
//                         },
//                         '& .MuiDataGrid-selectedRow': {
//                             backgroundColor: '#e0f7fa', // Background color for selected rows
//                         },
//                     },
//                 },
//             },
//         },
//     }),

//     serious: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#022140' },
//             secondary: { main: '#022140' },
//             background: { default: '#022140', paper: '#265077' },
//             text: { primary: '#ffffff', secondary: '#022140' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#1E4258' } } },//Top Nav
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#1E4258' } } },//Side Nav
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#494B68', color: '#022140' },
//                         '&:hover': { backgroundColor: '#022140' },
//                     }
//                 }
//             },
//             MuiSvgIcon: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for icons
//                     },
//                 },
//             },
//             MuiTypography: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for link fonts
//                     },
//                 },
//             },
//             MuiListSubheader: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for the ListSubheader
//                         backgroundColor: '#265077', // optional: change this to match the background
//                     },
//                 },
//             },
//             MuiDataGrid: {
//                 styleOverrides: {
//                     root: {
//                         '& .MuiDataGrid-cell': {
//                             backgroundColor: '#265077', // Background color for cells
//                             color: '#ffffff', // Font color for cells
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#022140', // Background color for column headers
//                             color: '#ffffff', // Font color for column headers
//                         },
//                         '& .MuiDataGrid-footerContainer': {
//                             backgroundColor: '#022140', // Background color for footer
//                         },
//                         '& .MuiDataGrid-toolbarContainer': {
//                             backgroundColor: '#f5f5f5', // Background color for toolbar
//                         },
//                         '& .MuiDataGrid-selectedRow': {
//                             backgroundColor: '#e0f7fa', // Background color for selected rows
//                         },
//                     },
//                 },
//             },
//         },
//     }),

//     solarin: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#0b4647' },
//             secondary: { main: '#4F4A41' },
//             background: { default: '#FFCB9A', paper: '#178587' },
//             text: { primary: '#ffffff', secondary: '#0b4647' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#0b4647' } } },//Top Nav
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#0b4647' } } },//Side Nav
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#FFCB9A', color: '#0b4647' },
//                         '&:hover': { backgroundColor: '#178587' },
//                     }
//                 }
//             },
//             MuiSvgIcon: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for icons
//                     },
//                 },
//             },
//             MuiTypography: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for link fonts
//                     },
//                 },
//             },
//             MuiListSubheader: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for the ListSubheader
//                         backgroundColor: '#62bfa8', // optional: change this to match the background
//                     },
//                 },
//             },
//             MuiDataGrid: {
//                 styleOverrides: {
//                     root: {
//                         '& .MuiDataGrid-cell': {
//                             backgroundColor: '#178587', // Background color for cells
//                             color: '#ffffff', // Font color for cells
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#FFCB9A', // Background color for column headers
//                             color: '#ffffff', // Font color for column headers
//                         },
//                         '& .MuiDataGrid-footerContainer': {
//                             backgroundColor: '#FFCB9A', // Background color for footer
//                         },
//                         '& .MuiDataGrid-toolbarContainer': {
//                             backgroundColor: '#f5f5f5', // Background color for toolbar
//                         },
//                         '& .MuiDataGrid-selectedRow': {
//                             backgroundColor: '#e0f7fa', // Background color for selected rows
//                         },
//                     },
//                 },
//             },
//         },
//     }),

//     stylish: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#5D5C61' },
//             secondary: { main: '#557A95' },
//             background: { default: '#022140', paper: '#7395AE' },
//             text: { primary: '#ffffff', secondary: '#0b4647' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#5D5C61' } } },//Top Nav
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#5D5C61' } } },//Side Nav
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#17a2b8', color: '#557A95' },
//                         '&:hover': { backgroundColor: '#557A95' },
//                     }
//                 }
//             },
//             MuiSvgIcon: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for icons
//                     },
//                 },
//             },
//             MuiTypography: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for link fonts
//                     },
//                 },
//             },
//             MuiListSubheader: {
//                 styleOverrides: {
//                     root: {
//                         color: '#ffffff', // change this to the color you want for the ListSubheader
//                         backgroundColor: '#7395AE', // optional: change this to match the background
//                     },
//                 },
//             },
//             MuiDataGrid: {
//                 styleOverrides: {
//                     root: {
//                         '& .MuiDataGrid-cell': {
//                             backgroundColor: '#265077', // Background color for cells
//                             color: '#ffffff', // Font color for cells
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#022140', // Background color for column headers
//                             color: '#ffffff', // Font color for column headers
//                         },
//                         '& .MuiDataGrid-footerContainer': {
//                             backgroundColor: '#022140', // Background color for footer
//                         },
//                         '& .MuiDataGrid-toolbarContainer': {
//                             backgroundColor: '#f5f5f5', // Background color for toolbar
//                         },
//                         '& .MuiDataGrid-selectedRow': {
//                             backgroundColor: '#e0f7fa', // Background color for selected rows
//                         },
//                     },
//                 },
//             },
//         },
//     }),

//     twitter: createTheme({
//         palette: {
//             mode: 'light',
//             primary: { main: '#1da1f2' }, // Twitter Blue
//             secondary: { main: '#14171a' }, // Dark Grey
//             background: { default: '#ffffff', paper: '#e6ecf0' },
//             text: { primary: '#14171a', secondary: '#657786' },
//         },
//         components: {
//             MuiAppBar: { styleOverrides: { root: { backgroundColor: '#1da1f2' } } },
//             MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#e6ecf0' } } },
//             MuiListItemButton: {
//                 styleOverrides: {
//                     root: {
//                         '&.Mui-selected': { backgroundColor: '#1da1f2', color: '#ffffff' },
//                         '&:hover': { backgroundColor: '#cde7fa' },
//                     }
//                 }
//             },
//         },
//     }),
// };

// export type ThemeType = 'light' | 'dark' | 'coptad' | 'facebook' | 'linkedin' | 'nature' | 'serious' | 'solarin' | 'stylish' | 'twitter';

