// app/ui/navigation/sidenav.tsx

'use client';

import { ChevronLeftIcon, PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/navigation/nav-links';
import { handleSignOut } from '@/app/auth/actions';

export default function SideNav({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: (collapsed: boolean) => void }) {

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`fixed h-full flex flex-col bg-[#022140] ${collapsed ? 'w-15' : 'w-60'} transition-all duration-300`}>
      <div className="flex justify-end pb-4 pt-4">
        <button onClick={toggleCollapse} className="text-white focus:outline-none">
          <ChevronLeftIcon className={`w-6 transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className="flex grow flex-col">
        <NavLinks collapsed={collapsed} />

        <div className="hidden h-auto w-full grow bg-gray-50 md:block"></div>

        <form action={handleSignOut}>

          <button className="flex h-[48px] w-full items-center gap-2 bg-orange-600 text-sm font-medium text-white hover:bg-orange-400">
            <PowerIcon className="w-6 ml-4 mr-4" />
            {!collapsed && <div className="md:block">Sign Out</div>}
          </button>
        </form>
      </div>
    </div>
  );
} 
