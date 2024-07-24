// app/navigation/layout.tsx

"use client"

import SideNav from '@/app/ui/navigation/sidenav';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`flex-grow overflow-y-auto p-6 md:p-12 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
                {children}
            </div>
        </div>
    );
}


