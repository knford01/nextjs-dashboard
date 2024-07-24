// app/ui/navigation/top-nav.tsx

'use client';

import { FC } from 'react';
import clsx from 'clsx';
import { COMPANY_NAME } from '@/app/lib/constants';

interface TopNavProps {
    collapsed: boolean;
}

const TopNav: FC<TopNavProps> = ({ collapsed }) => {
    return (
        <div className={clsx("fixed top-0 left-0 right-0 flex items-center h-14 bg-[#1E4258] text-white transition-all duration-300 z-10", { 'ml-16': collapsed, 'ml-60': !collapsed })}>
            <div className="flex items-center pl-4">
                <h1 className="text-lg font-bold">{COMPANY_NAME}</h1>
            </div>
        </div>
    );
};

export default TopNav; 
