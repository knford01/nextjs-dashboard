// components/TopNavigation.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../css/topnavigation.module.css';
import { AdjustmentsVerticalIcon, UserIcon } from '@heroicons/react/24/outline'; // Ensure v2 path

const TopNavigation = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    const handleUserMenuToggle = () => setShowUserMenu(!showUserMenu);
    const handleThemeMenuToggle = () => setShowThemeMenu(!showThemeMenu);

    return (
        <nav className={styles.topNav}>
            <div className={styles.left}>
                <h1>AR-Source Software</h1>
            </div>
            <div className={styles.right}>
                <button onClick={handleUserMenuToggle} className={styles.iconButton}>
                    <UserIcon className={styles.icon} />
                </button>
                {showUserMenu && (
                    <div className={styles.userMenu}>
                        {/* User menu items */}
                        <Link href="/profile">Profile</Link>
                        <Link href="/settings">Settings</Link>
                        <Link href="/logout">Logout</Link>
                    </div>
                )}
                <button onClick={handleThemeMenuToggle} className={styles.iconButton}>
                    <AdjustmentsVerticalIcon className={styles.icon} />
                </button>
                {showThemeMenu && (
                    <div className={styles.themeMenu}>
                        {/* Theme options */}
                        <button>Dark Theme</button>
                        <button>Light Theme</button>
                        {/* Add more themes */}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default TopNavigation;
