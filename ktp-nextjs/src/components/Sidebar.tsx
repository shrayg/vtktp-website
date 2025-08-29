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
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#2B4D89] text-white shadow-lg z-[1000]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/KTP_Logos_Letters_KTP_Logo.png"
              alt="KTP Logo"
              width={120}
              height={60}
              className="block"
            />
          </div>
          
          {/* Navigation Links - Centered but slightly left */}
          <nav className="hidden md:flex items-center justify-center flex-1 ml-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white no-underline text-lg font-medium transition-colors duration-200 hover:text-[#3CB371] ${
                    pathname === item.href
                      ? 'text-[#3CB371] border-b-2 border-[#3CB371] pb-1'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <div className="text-white text-lg font-medium">
              KTP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 