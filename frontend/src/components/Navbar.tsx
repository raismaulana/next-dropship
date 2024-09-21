"use client";

import Link from 'next/link';
import React from 'react';

interface NavbarProps {
    user?: any;
}
  
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header className="flex justify-between w-full px-8 py-4">
        <Link href="/" className="text-xl font-bold">
        Dropship
        </Link>
        {user ? (
          <Link href="/logout" className="text-white">
            Sign Out
          </Link>
        ) : (
          <Link href="/login" className="text-white">
            Sign In
          </Link>
        )}
    </header>
  );
}

export default Navbar;
