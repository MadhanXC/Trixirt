"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Magnets', 'Signages', 'Hydroponics'] as const;
type Category = typeof CATEGORIES[number];

const PROJECTS = [
  { id: 'project-1', title: 'Turbine Assemblies', category: 'Magnets', desc: 'Precision high-grade magnetic rotors for renewable energy.' },
  { id: 'project-2', title: 'Tech Hub Wayfinding', category: 'Signages', desc: 'Integrated indoor navigation for a 50,000sqft campus.' },
  { id: 'project-3', title: 'Eco-Warehouse Farm', category: 'Hydroponics', desc: 'Large-scale vertical lettuce production facility.' },
  { id: 'project-4', title: 'Industrial Separators', category: 'Magnets', desc: 'Advanced rare-earth separators for the mining sector.' },
  { id: 'project-5', title: 'Retail Neon Art', category: 'Signages', desc: 'Custom creative neon work for a flagship luxury boutique.' },
  { id: 'project-6', title: 'Urban Farm Pods', category: 'Hydroponics', desc: 'Modular hydroponic units for community growing.' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-headline text-4xl font-bold text-white mb-6">Project <span className="text-secondary">Portfolio</span></h1>
          <p className="text-muted-foreground text-base">
            Explore our diverse range of engineering and creative deliveries across industrial magnets, architectural signages, and vertical agriculture.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 mr-4 text-white font-medium">
            <Filter className="h-4 w-4 text-secondary" />
            <span>Filter By:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-8 transition-all ${activeCategory === cat ? 'bg-secondary text-primary scale-105 border-none' : 'text-white border-white/20 hover:border-secondary hover:text-secondary'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const img = PlaceHolderImages.find(i => i.id === project.id)?.imageUrl || '';
            return (
              <div 
                key={project.id} 
                className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={img} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 scale-50 group-hover:scale-100 transition-transform">
                      <ExternalLink className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white hover:bg-primary border-none backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground italic text-base">No projects found in this category. Check back soon for updates.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 p-12 rounded-[3rem] bg-card text-white text-center relative overflow-hidden border border-white/5">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(56,203,236,0.05),transparent)] pointer-events-none" />
           <h2 className="font-headline text-4xl font-bold mb-6 relative z-10">Have a custom project requirement?</h2>
           <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto relative z-10">Our engineering and design teams specialize in bespoke solutions tailored to your specific technical or creative needs.</p>
           <Button size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-xl relative z-10 h-14 px-10 text-base">
             Request a Consultation
           </Button>
        </div>
      </div>
    </div>
  );
}