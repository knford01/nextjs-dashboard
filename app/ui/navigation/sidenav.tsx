// app/ui/navigation/sidenav.tsx

'use client';

import { ChevronLeftIcon, PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/navigation/nav-links';
import { handleSignOut } from '@/app/auth/actions';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export default function SideNav({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: (collapsed: boolean) => void }) {
  const theme = useTheme();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: collapsed ? '64px' : '240px',
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'end', padding: '16px' }}>
        <button onClick={toggleCollapse} className="text-white focus:outline-none">
          <ChevronLeftIcon className={`w-6 transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <NavLinks collapsed={collapsed} />
      </Box>
      <Box>
        <form action={handleSignOut}>
          <button className="flex h-[48px] w-full items-center gap-2 bg-orange-600 text-sm font-medium text-white hover:bg-orange-400">
            <PowerIcon className="w-6 ml-4 mr-4" />
            {!collapsed && <div className="md:block">Sign Out</div>}
          </button>
        </form>
      </Box>
    </Box>
  );
}
