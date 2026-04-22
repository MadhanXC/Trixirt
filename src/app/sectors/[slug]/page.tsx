import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { CheckCircle, Magnet, Palette, Sprout, ShieldCheck, Users, Zap, BarChart3, Globe, Package, Truck } from 'lucide-react';
import Link from 'next/link';

type SectorData = {
  title: string;
  subtitle: string;
  description: string;
  whoWeAre: string;
  whatWeOfferTitle?: string;
  whatWeOfferContent?: string;
  whyTrixirt: string;
  image: string;
  icon: any;
  features: { label: string; icon: any }[];
  specs: { label: string; value: string }[];
  projects: string[];
  ctaEmail?: string;
};

const SECTORS: Record<string, SectorData> = {
  'neodymium-magnets': {
    title: "Neodymium Magnets",
    subtitle: "High-Performance Neodymium Magnets for Demanding Industries - Industrial Strength. Engineered Precision.",
    description: "Trixirt supplies premium neodymium magnets to manufacturers, engineers, and procurement teams worldwide as industries increasingly transition toward compact, energy-efficient and high-performance systems. Whether you need standard grades or custom-spec solutions, we deliver the magnetic force your operations depend on through global sourcing, application-based technical support and dependable supply.",
    whoWeAre: "Built for B2B. Optimized for Scale. At Trixirt, we understand that sourcing critical components is about more than price - it is about consistency, reliability, and a supplier you can count on. We specialize in bulk neodymium magnet supply, working directly with industrial clients, OEM manufacturers, research institutions, and engineering firms to fulfill high-volume orders with uncompromising quality standards.",
    whatWeOfferTitle: "Products Engineered to Specification",
    whatWeOfferContent: "We work with qualified international manufacturers to provide a comprehensive range of neodymium magnet solutions, including Grades N35 to N52 and high-temperature SH/H variants. We support a wide range of sectors from electric vehicles to renewable technologies.",
    whyTrixirt: "The Trixirt Advantage - Consistent Quality. Reliable Supply. Enduring Partnerships. Our clients choose us because we treat procurement as a partnership. Every order is backed by thorough quality checks, transparent lead times, and reliable sourcing through a diversified international supplier network.",
    image: PlaceHolderImages.find(img => img.id === 'magnets-sector')?.imageUrl || '',
    icon: Magnet,
    features: [
      { label: "Electric vehicles and motor assemblies", icon: Zap },
      { label: "Solar and water pumping systems", icon: Globe },
      { label: "Industrial motors and automation", icon: ShieldCheck },
      { label: "Servo motors, robotics and motion control", icon: Users },
      { label: "Wind energy and renewable technologies", icon: BarChart3 },
      { label: "Electronics and precision manufacturing", icon: CheckCircle }
    ],
    specs: [
      { label: "Grades", value: "N35, N42, N48, N52 and SH/H variants" },
      { label: "Configurations", value: "Disc, block, ring and arc-segment" },
      { label: "Coatings", value: "Nickel, epoxy and custom finishes" },
      { label: "Dimensions", value: "Standard and custom tailored" }
    ],
    projects: ['project-1', 'project-4'],
    ctaEmail: "contact@trixirt.com"
  },
  'hydroponic-farming': {
    title: "Hydroponic Farming & Export",
    subtitle: "Fresh Produce. Precision Grown.",
    description: "At Trixirt, we combine modern hydroponic farming with international export standards to deliver premium-quality fresh produce to global markets. Our hydroponic systems are designed to produce cleaner, healthier and more consistent crops using significantly less water and land than conventional agriculture. By controlling nutrients, climate, and growing conditions, we are able to cultivate produce with superior taste, appearance, shelf life, and year-round availability.",
    whoWeAre: "We currently specialize in three high-demand hydroponic crops: Cucumbers, Tomatoes, and Capsicum. By controlling nutrients, climate, and growing conditions, we are able to cultivate produce with superior taste, appearance, shelf life, and year-round availability for supermarkets and distributors.",
    whatWeOfferTitle: "Export Capabilities & Logistics",
    whatWeOfferContent: "Trixirt supports bulk export orders, custom packaging and labelling, grading and sorting to buyer specifications, and cold-chain handling. We are a trusted partner for buyers seeking premium produce with reliable supply and uniform quality.",
    whyTrixirt: "Precision and Reliability. Our produce is characterized by higher yields, consistent quality throughout the year, reduced pesticide usage, and better water efficiency. We provide cleaner, residue-free produce that meets strict international expectations.",
    image: PlaceHolderImages.find(img => img.id === 'hydroponics-sector')?.imageUrl || '',
    icon: Sprout,
    features: [
      { label: "Bulk export orders", icon: Globe },
      { label: "Custom packaging and labelling", icon: Package },
      { label: "Grading and sorting to specs", icon: BarChart3 },
      { label: "Cold-chain handling and logistics", icon: Truck },
      { label: "Long-term supply agreements", icon: ShieldCheck }
    ],
    specs: [
      { label: "Core Crops", value: "Cucumbers, Tomatoes, Capsicum" },
      { label: "Efficiency", value: "95% Less Water usage" },
      { label: "Availability", value: "Year-Round Continuous Cycle" },
      { label: "Markets", value: "Retail, Hotels, Export" }
    ],
    projects: ['project-3', 'project-6'],
    ctaEmail: "contact@trixirt.com"
  },
  'signages': {
    title: "Signage Solutions",
    subtitle: "Designed for Brands That Stand Out. Crafted to Elevate. Engineered to Impress.",
    description: "Trixirt delivers premium signage solutions designed to enhance brand presence across retail, commercial, and architectural spaces. Combining precision fabrication, high-quality materials, and advanced illumination, our signage is built to create lasting visual impact.",
    whoWeAre: "We specialize in bespoke channel letters and illuminated lightboards, tailored for brands that value clarity, durability, and design excellence - delivered worldwide.",
    whatWeOfferTitle: "Our Offerings",
    whatWeOfferContent: "We provide export-ready signage solutions with secure packaging, modular designs, and reliable worldwide shipping - supporting both bulk orders and multi-location projects.",
    whyTrixirt: "The Trixirt Advantage - Precision Craftsmanship. Global Standards. Lasting Impact.",
    image: PlaceHolderImages.find(img => img.id === 'signages-sector')?.imageUrl || '',
    icon: Palette,
    features: [
      { label: "Custom-crafted Channel Letters", icon: CheckCircle },
      { label: "Sleek Illuminated Lightboards", icon: Zap },
      { label: "Front-lit, Backlit & Halo-lit", icon: Palette },
      { label: "High-efficiency LED systems", icon: Zap },
      { label: "Weather-resistant materials", icon: ShieldCheck },
      { label: "Worldwide shipping & logistics", icon: Globe }
    ],
    specs: [
      { label: "Types", value: "Channel Letters, Lightboards" },
      { label: "Lighting", value: "LED Front/Back/Halo Lit" },
      { label: "Materials", value: "Premium Weather-Resistant" },
      { label: "Delivery", value: "Export-Ready Worldwide" }
    ],
    projects: ['project-2', 'project-5'],
    ctaEmail: "contact@trixirt.com"
  }
};

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = SECTORS[params.slug];
  
  if (!sector) {
    notFound();
  }

  const Icon = sector.icon;

  return (
    <div className="flex flex-col w-full pb-20 bg-background">
      {/* Sector Header */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
        <Image 
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container px-4">
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
            <Icon className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tight mb-4 shadow-sm">{sector.title}</h1>
          <p className="text-base font-medium opacity-90 max-w-2xl mx-auto drop-shadow-md">{sector.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card p-10 md:p-12 rounded-[2rem] shadow-xl border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <p className="text-base uppercase tracking-wider text-secondary font-bold">Sector Overview</p>
              </div>
              <p className="text-base text-foreground font-medium mb-10">
                {sector.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" /> Who we are
                  </h3>
                  <p className="text-base text-muted-foreground font-medium">
                    {sector.whoWeAre}
                  </p>
                </div>

                {sector.whatWeOfferTitle && (
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white mb-6 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-secondary" /> {sector.whatWeOfferTitle}
                    </h3>
                    <p className="text-base text-muted-foreground font-medium mb-6">
                      {sector.whatWeOfferContent}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sector.features.map((feature) => (
                        <div key={feature.label} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-white/5">
                          <feature.icon className="h-5 w-5 shrink-0 text-secondary" />
                          <span className="text-base font-bold text-white">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-10 rounded-2xl bg-primary text-white">
                  <h3 className="text-xl font-headline font-bold text-white mb-4">The Trixirt Advantage</h3>
                  <p className="text-base font-medium text-white/90">
                    {sector.whyTrixirt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary/20 border border-primary/30 text-white p-10 rounded-[2rem] shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-headline font-bold text-white mb-8 border-b border-white/10 pb-4">Technical Specifications</h3>
              <div className="space-y-8">
                {sector.specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-secondary uppercase font-bold tracking-widest text-base mb-2">{spec.label}</p>
                    <p className="text-base font-bold text-white leading-snug">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[2rem] border border-white/10 shadow-lg bg-card">
               <h3 className="text-xl font-headline font-bold text-white mb-4">Bulk Inquiries</h3>
               <p className="text-base font-medium text-muted-foreground mb-8">
                 Our specialized sales team is ready to assist with bulk orders and export logistics.
               </p>
               <div className="p-5 rounded-xl bg-background border border-white/5">
                  <p className="text-secondary uppercase tracking-widest text-base font-bold mb-2">Direct Email</p>
                  <p className="text-base text-white font-bold">{sector.ctaEmail || 'contact@trixirt.com'}</p>
               </div>
               <Link href="/contact" className="block mt-8">
                 <Button className="w-full bg-primary hover:bg-primary/90 text-white text-base font-bold h-12 rounded-xl border-none">
                   Initiate Bulk Order
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
