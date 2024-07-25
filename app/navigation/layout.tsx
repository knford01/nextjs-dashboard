// app/navigation/layout.tsx

"use client";

import SideNav from '@/app/ui/navigation/sidenav';
import TopNav from '@/app/ui/navigation/topnav';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme, defaultTheme } from '../ui/navigation/themes';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="flex h-screen overflow-hidden">
                <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
                <div className="flex flex-col flex-grow">
                    <TopNav collapsed={collapsed} />
                    <div className={`flex-grow overflow-y-auto p-6 md:p-12 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-60'} pt-20`}>
                        <div className="m-6"></div>
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
