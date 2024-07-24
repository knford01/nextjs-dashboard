// app/navigation/layout.tsx

"use client";

import SideNav from '@/app/ui/navigation/sidenav';
import TopNav from '@/app/ui/navigation/topnav';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="flex flex-col flex-grow">
                <TopNav collapsed={collapsed} />
                <div className={`flex-grow overflow-y-auto p-6 md:p-12 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-60'} pt-20`}>
                    <div className="m-6"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}
