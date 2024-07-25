// app/ui/navigation/nav-links.tsx

'use client';

import { FC } from 'react';
import { HomeIcon, ChevronDownIcon, UserIcon, UserGroupIcon, TruckIcon, UserPlusIcon, ShoppingCartIcon, UserCircleIcon, RectangleGroupIcon, ChevronUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

const links = [
    { name: 'Dashboard', href: '/navigation', icon: HomeIcon },
    { name: 'Invoices', href: '/navigation/invoices', icon: BookOpenIcon }
];

// Nested array for systems and their links
const systemsLinks = [
    {
        system: 'CRM',
        links: [
            { name: 'Leads', href: '/navigation/crm/leads' },
            {
                name: 'Sales', links: [
                    { name: 'Quotes', href: '/navigation/crm/sales/quotes' },
                    { name: 'Contracts', href: '/navigation/crm/sales/contracts' },
                    { name: 'Orders', href: '/navigation/crm/sales/orders' },
                ]
            },
            { name: 'Reports', href: '/navigation/crm/reports' },
            { name: 'Settings', href: '/navigation/crm/settings' },
        ],
        icon: UserPlusIcon
    },
    {
        system: 'EDI Manager',
        links: [
            { name: 'Orders', href: '/navigation/edi/orders' },
            { name: 'Quality Assurance', href: '/navigation/edi/qa' },
            { name: 'Shipped', href: '/navigation/edi/shipped' },
            { name: 'Invoiced', href: '/navigation/edi/invoiced' },
            { name: 'History', href: '/navigation/edi/history' },
            { name: 'Reports', href: '/navigation/edi/reports' },
            { name: 'Settings', href: '/navigation/edi/settings' },
        ],
        icon: ShoppingCartIcon
    },
    {
        system: 'Human Relations',
        links: [
            { name: 'Employees', href: '/navigation/hr/employees' },
            { name: 'Scheduling', href: '/navigation/hr/scheduling' },
            { name: 'Attendance', href: '/navigation/hr/attendance' },
            { name: 'PTO Leave', href: '/navigation/hr/pto' },
            { name: 'Reports', href: '/navigation/hr/reports' },
            { name: 'Settings', href: '/navigation/hr/settings' },
        ],
        icon: UserCircleIcon
    },
    {
        system: 'Project Manager',
        links: [
            { name: 'Projects', href: '/navigation/pm/projects' },
            { name: 'Tasks', href: '/navigation/pm/tasks' },
            { name: 'CAN Board', href: '/navigation/pm/can' },
            { name: 'Reports', href: '/navigation/pm/reports' },
            { name: 'Settings', href: '/navigation/pm/settings' },
        ],
        icon: RectangleGroupIcon
    },
    {
        system: 'Warehouse Manager',
        links: [
            {
                name: 'Receiving', links: [
                    { name: 'Staging', href: '/navigation/wm/receiving/staging' },
                    { name: 'Put Away', href: '/navigation/wm/receiving/pa' },
                    { name: 'History', href: '/navigation/wm/receiving/history' },
                ]
            },
            {
                name: 'Fullfilment', links: [
                    { name: 'Orders', href: '/navigation/wm/fullfilment/orders' },
                    { name: 'Quality Assurance', href: '/navigation/wm/fullfilment/qa' },
                    { name: 'Shipped', href: '/navigation/wm/fullfilment/shipped' },
                    { name: 'History', href: '/navigation/wm/fullfilment/history' },
                ]
            },
            { name: 'Inventory', href: '/navigation/wm/inventory' },
            { name: 'Reports', href: '/navigation/wm/reports' },
            { name: 'Settings', href: '/navigation/wm/settings' },
        ],
        icon: TruckIcon
    },
];

const resources = [
    { name: 'Customers', href: '/navigation/resources/customers', icon: UserGroupIcon }
];

const settings = [
    { name: 'Users', href: '/navigation/settings/users', icon: UserIcon }
];

interface Link {
    name: string;
    href?: string;
    links?: Link[];
}

interface System {
    system: string;
    links: Link[];
}

interface RecursiveLinksProps {
    links: Link[];
    collapsed: boolean;
    pathname: string;
    toggleDropdown: (name: string) => void;
    dropdownOpen: { [key: string]: boolean };
}

const RecursiveLinks: FC<RecursiveLinksProps> = ({ links, collapsed, pathname, toggleDropdown, dropdownOpen }) => {
    return (
        <>
            {links.map(link => {
                if (link.href) {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'w-full block p-3 bg-[#1E4258] text-white text-sm hover:bg-[#022140] pl-10 border-b border-gray-600',
                                {
                                    'text-white': pathname === link.href,
                                },
                            )}
                            style={pathname === link.href ? { backgroundColor: '#494B68' } : {}}
                        >
                            {link.name}
                        </Link>
                    );
                } else {
                    const isNestedLinkActive = link.links?.some(nestedLink => nestedLink.href === pathname || (nestedLink.links && nestedLink.links.some(deepNestedLink => deepNestedLink.href === pathname)));
                    return (
                        <div key={link.name}>
                            <button
                                onClick={() => toggleDropdown(link.name)}
                                className="w-full flex h-[48px] items-center gap-2 text-white text-md font-medium bg-[#2D5F5D] hover:bg-[#022140] border-b border-gray-600 rounded-lg"
                                style={isNestedLinkActive ? { backgroundColor: '#494B68' } : {}}
                            >
                                <ChevronDownIcon className={`w-6 ml-4 mr-4 transform ${dropdownOpen[link.name] ? 'rotate-180' : ''}`} />
                                <p className="md:block">{link.name}</p>
                            </button>

                            {dropdownOpen[link.name] && (
                                <div className="ml-6">
                                    <RecursiveLinks
                                        links={link.links!}
                                        collapsed={collapsed}
                                        pathname={pathname}
                                        toggleDropdown={toggleDropdown}
                                        dropdownOpen={dropdownOpen}
                                    />
                                </div>
                            )}
                        </div>
                    );
                }
            })}
        </>
    );
};

export default function NavLinks({ collapsed }: { collapsed: boolean }) {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (name: string) => {
        setDropdownOpen(prevState => ({ ...prevState, [name]: !prevState[name] }));
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
                            'flex h-[48px] items-center gap-2 text-white text-md font-medium bg-[#1E4258] hover:bg-[#022140] border-b border-gray-600',
                            {
                                'text-white hover:text-white': pathname === link.href,
                            },
                        )}
                        style={pathname === link.href ? { backgroundColor: '#494B68' } : {}}
                    >
                        <LinkIcon className="w-6 ml-4 mr-4" />
                        {!collapsed && <p className="md:block">{link.name}</p>}
                    </Link>
                );
            })}

            {!collapsed && (
                <div className="p-2 text-lg text-white text-center font-bold bg-[#265077] border-b border-gray-600">
                    Systems
                </div>
            )}

            {systemsLinks.map((system) => {
                const LinkIcon = system.icon;
                const isSystemLinkActive = system.links.some(link => pathname === link.href || (link.links && link.links.some(nestedLink => pathname === nestedLink.href)));
                return (
                    <div key={system.system}>
                        <button
                            onClick={() => toggleDropdown(system.system)}
                            className="w-full flex h-[48px] items-center gap-2 text-white text-md font-medium bg-[#1E4258] hover:bg-[#022140] border-b border-gray-600"
                            style={isSystemLinkActive ? { backgroundColor: '#494B68' } : {}}
                        >

                            <ChevronUpIcon className={`w-6 ml-4 mr-4 ${dropdownOpen[system.system] ? '' : 'hidden'}`} />
                            <LinkIcon className={`w-6 ml-4 mr-4 ${dropdownOpen[system.system] ? 'hidden' : ''}`} />
                            {!collapsed && <p className="md:block">{system.system}</p>}

                        </button>
                        {dropdownOpen[system.system] && (
                            <div className="ml-6">
                                <RecursiveLinks
                                    links={system.links}
                                    collapsed={collapsed}
                                    pathname={pathname}
                                    toggleDropdown={toggleDropdown}
                                    dropdownOpen={dropdownOpen}
                                />
                            </div>
                        )}
                    </div>
                );
            })}

            {!collapsed && (
                <div className="p-2 text-lg text-white text-center font-bold bg-[#265077] border-b border-gray-600">
                    Admin Settings
                </div>
            )}

            {settings.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] items-center gap-2 text-white text-md font-medium bg-[#1E4258] hover:bg-[#022140] border-b border-gray-600',
                            {
                                'text-white hover:text-white': pathname === link.href,
                            },
                        )}
                        style={pathname === link.href ? { backgroundColor: '#494B68' } : {}}
                    >
                        <LinkIcon className="w-6 ml-4 mr-4" />
                        {!collapsed && <p className="md:block">{link.name}</p>}
                    </Link>
                );
            })}


        </>
    );
}
