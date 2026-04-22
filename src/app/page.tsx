import Image from 'next/image';
import Link from 'next/link';
import { Magnet, Palette, Sprout, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import SectorCard from '@/components/SectorCard';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function Home() {
  const magnetsImg = PlaceHolderImages.find(img => img.id === 'magnets-sector')?.imageUrl || '';
  const signagesImg = PlaceHolderImages.find(img => img.id === 'signages-sector')?.imageUrl || '';
  const hydroImg = PlaceHolderImages.find(img => img.id === 'hydroponics-sector')?.imageUrl || '';
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || '';

  const sectors = [
    {
      title: "Neodymium Magnets",
      description: "Providing world-class magnetic solutions for high-performance motors, electronics, and industrial separation systems.",
      href: "/sectors/neodymium-magnets",
      image: magnetsImg,
      icon: Magnet,
    },
    {
      title: "Creative Signages",
      description: "Visual communication that makes an impact through bespoke architectural signages and wayfinding solutions.",
      href: "/sectors/signages",
      image: signagesImg,
      icon: Palette,
    },
    {
      title: "Hydroponic Farming",
      description: "Reimagining agriculture through high-tech indoor vertical farming. Sustainable, pesticide-free produce.",
      href: "/sectors/hydroponic-farming",
      image: hydroImg,
      icon: Sprout,
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section - Full Page View */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image
          src={heroImg}
          alt="TRIXIRT Industrial Excellence"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">
              Driving <span className="text-secondary">Precision</span>,<br />
              Inspiring <span className="text-secondary">Innovation</span>.
            </h1>
            <p className="max-w-2xl opacity-90 text-base md:text-lg">
              TRIXIRT is a multi-sector industrial leader, delivering specialized solutions in high-performance magnets, creative visual systems, and sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white h-14 px-10 backdrop-blur-sm rounded-xl font-bold">
                  Explore Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="p-4 rounded-2xl bg-primary/20 text-secondary">
                <Shield className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Reliable Engineering</h3>
                <p className="opacity-60 text-base">Industrial grade materials and precision manufacturing processes that meet international standards.</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="p-4 rounded-2xl bg-primary/20 text-secondary">
                <Zap className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovative R&D</h3>
                <p className="opacity-60 text-base">Continuous investment in research and development across all three core business sectors.</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="p-4 rounded-2xl bg-primary/20 text-secondary">
                <Globe className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Sustainable Impact</h3>
                <p className="opacity-60 text-base">Focusing on eco-friendly solutions from energy-efficient magnets to vertical hydroponic farms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-headline font-bold">Core Industrial Pillars</h2>
            <p className="opacity-60 mt-4 text-base">
              Each TRIXIRT division operates with deep domain expertise, combining specialized technical knowledge with our shared group values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <SectorCard key={sector.title} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-headline font-bold max-w-4xl mx-auto">
            Let's Build the Future of Industry.
          </h2>
          <p className="opacity-60 max-w-3xl mx-auto text-base">
            Whether you need custom magnetic components, creative branding systems, or high-tech agriculture, our experts are ready to collaborate.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-primary hover:text-white h-14 px-12 rounded-xl hover:scale-105 transition-all shadow-xl font-bold group border-none">
                Initiate Inquiry
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
