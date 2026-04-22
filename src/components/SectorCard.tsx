import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SectorCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: LucideIcon;
}

export default function SectorCard({ title, description, href, image, icon: Icon }: SectorCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full overflow-hidden border-white/5 bg-card/50 shadow-lg transition-transform duration-300 will-change-transform group-hover:-translate-y-2">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20 transition-opacity duration-300 group-hover:opacity-40" />
          <div className="absolute top-4 right-4 p-2 rounded-xl bg-background/80 backdrop-blur-md text-secondary border border-white/10 z-10">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <CardContent className="p-8">
          <h3 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-secondary">{title}</h3>
          <p className="text-white/60 text-base leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-secondary font-bold text-base">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
