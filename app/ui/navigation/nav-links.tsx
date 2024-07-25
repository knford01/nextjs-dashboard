// app/ui/navigation/nav-links.tsx

'use client';

import { FC } from 'react';
import { HomeIcon, BookOpenIcon, UserPlusIcon, ShoppingCartIcon, UserCircleIcon, RectangleGroupIcon, TruckIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme, Box } from '@mui/material';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/navigation', icon: HomeIcon },
  { name: 'CRM', href: '/navigation/crm', icon: UserPlusIcon },
  { name: 'EDI Manager', href: '/navigation/edi', icon: ShoppingCartIcon },
  { name: 'Human Relations', href: '/navigation/hr', icon: UserCircleIcon },
  { name: 'Project Manager', href: '/navigation/pm', icon: RectangleGroupIcon },
  { name: 'Warehouse Manager', href: '/navigation/warehouse', icon: TruckIcon },
  { name: 'Customers', href: '/navigation/resources/customers', icon: UserGroupIcon },
  { name: 'Users', href: '/navigation/settings/users', icon: UserIcon }
];

export default function NavLinks({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Box
            key={link.name}
            component={Link}
            href={link.href}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              height: 48,
              textDecoration: 'none',
              fontWeight: 'medium',
              borderBottom: '1px solid',
              borderColor: 'gray.600',
              backgroundColor: pathname === link.href ? theme.palette.action.selected : theme.palette.primary.main,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.text.secondary,
              },
              transition: 'background-color 0.3s, color 0.3s',
            }}
            className={clsx({
              'hover:text-white': pathname === link.href,
            })}
          >
            <LinkIcon className="w-6 ml-4 mr-4" />
            {!collapsed && <p className="md:block">{link.name}</p>}
          </Box>
        );
      })}
    </>
  );
}
