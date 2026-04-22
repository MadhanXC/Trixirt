"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Magnet, Palette, Sprout } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Magnets', href: '/sectors/neodymium-magnets', icon: Magnet },
  { label: 'Signages', href: '/sectors/signages', icon: Palette },
  { label: 'Hydroponics', href: '/sectors/hydroponic-farming', icon: Sprout },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base font-bold transition-all duration-300 hover:text-secondary",
                    pathname === item.href ? "text-secondary" : "text-white/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl animate-in slide-in-from-top duration-300">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block flex items-center gap-3 rounded-xl px-4 py-3 text-base font-bold transition-all",
                  pathname === item.href ? "bg-primary/20 text-secondary" : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
