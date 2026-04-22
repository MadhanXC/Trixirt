import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-base">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/60 leading-relaxed max-w-xs">
              Pioneering solutions in industrial technology, creative communication, and sustainable agriculture.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-headline font-bold mb-6 text-white">Sectors</h3>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/sectors/neodymium-magnets" className="hover:text-secondary">Neodymium Magnets</Link></li>
              <li><Link href="/sectors/signages" className="hover:text-secondary">Creative Signages</Link></li>
              <li><Link href="/sectors/hydroponic-farming" className="hover:text-secondary">Hydroponic Farming</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-headline font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-headline font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-secondary" /> Madurai, India.</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-secondary" /> +91 98421 03553</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-secondary" /> contact@trixirt.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/30">
          <p className="text-base">© 2026 TRIXIRT Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
