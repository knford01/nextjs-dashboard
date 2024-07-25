// app/ui/navigation/top-nav.tsx

'use client';

import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
import { COMPANY_NAME } from '@/app/lib/constants';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useThemeContext } from '@/app/navigation/layout';
import { lightTheme, darkTheme, defaultTheme } from './themes';

interface TopNavProps {
    collapsed: boolean;
}

const TopNav: FC<TopNavProps> = ({ collapsed }) => {
    const { setTheme } = useThemeContext();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={clsx("fixed top-0 left-0 right-0 flex items-center h-14 bg-[#1E4258] text-white transition-all duration-300 z-10", { 'ml-16': collapsed, 'ml-60': !collapsed })}>
            <div className="flex items-center pl-4">
                <h1 className="text-lg font-bold">{COMPANY_NAME}</h1>
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={handleClick} color="inherit" sx={{ mr: 2 }}>
                <PaletteIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { setTheme(lightTheme); handleClose(); }}>Light Theme</MenuItem>
                <MenuItem onClick={() => { setTheme(darkTheme); handleClose(); }}>Dark Theme</MenuItem>
                <MenuItem onClick={() => { setTheme(defaultTheme); handleClose(); }}>Default Theme</MenuItem>
            </Menu>
        </div>
    );
};

export default TopNav;
