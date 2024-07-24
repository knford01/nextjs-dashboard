// app/ui/navigation/nav-links.tsx

'use client';

import { HomeIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/navigation', icon: HomeIcon }
];

const systemsLinks = [
  { name: 'Orders', href: '/systems/orders' },
  { name: 'EDI Setup', href: '/systems/edi-setup' },
];

export default function NavLinks({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
                'text-white': pathname === link.href,
              },
            )}
            style={pathname === link.href ? { backgroundColor: '#494B68' } : {}}
          >
            <LinkIcon className="w-6 ml-4 mr-4" />
            {!collapsed && <p className="md:block">{link.name}</p>}
          </Link>
        );
      })}

      {!collapsed && <div className="mt-4 mb-2 text-gray-500">Systems</div>}
      <div>
        <button
          onClick={toggleDropdown}
          className="flex h-[48px] w-full items-center gap-2 bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600"
        >
          <ChevronDownIcon className={`w-6 ml-4 mr-4 transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          {!collapsed && <p className="md:block">EDI Manager</p>}
        </button>
        {dropdownOpen && (
          <div className="ml-6 mt-2">
            {systemsLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'block h-[36px] items-center gap-2 bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 pl-10',
                  {
                    'text-white': pathname === link.href,
                  },
                )}
                style={pathname === link.href ? { backgroundColor: '#494B68' } : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
