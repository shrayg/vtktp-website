'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About KTP' },
    { href: '/philanthropy', label: 'Philanthropy' },
    { href: '/members', label: 'Members' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
  <div className="fixed top-0 left-0 right-0 bg-[#0049ba] text-white z-[1000]" style={{ boxShadow: '0 18px 32px 0 rgba(0,0,0,0.38)' }}>
    <div className="max-w-7xl mx-auto px-0 py-4">
      <nav className="flex items-center justify-start w-full">
        <div className="flex items-center space-x-12 -ml-52">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white no-underline text-2xl font-semibold transition-colors duration-200 hover:text-[#3CB371] ${
                pathname === item.href
                  ? 'text-[#3CB371] border-b-2 border-[#3CB371] pb-1'
                  : ''
              }`}
              style={{ textAlign: 'center' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  </div>
  );
} 