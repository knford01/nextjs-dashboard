// app/ui/navigation/nav-links.tsx

'use client';

import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/navigation', icon: HomeIcon }
];

export default function NavLinks({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center gap-2 bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
              {
                'bg-[#494B68] text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 ml-4 mr-4" />
            {!collapsed && <p className="md:block">{link.name}</p>}
          </Link>
        );
      })}
    </>
  );
}
