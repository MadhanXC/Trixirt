import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Target, Eye, Users, Heart, Shield, Globe, Zap, Settings } from 'lucide-react';

export default function AboutPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'about-hero')?.imageUrl || '';
  const storyImg = PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || '';

  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src={heroImg} 
          alt="Our Vision" 
          fill 
          className="object-cover" 
          priority 
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-white mb-4 text-4xl font-bold shadow-sm">Our Vision</h1>
          <p className="text-base text-white/90 max-w-2xl mx-auto drop-shadow-md">Combining engineering precision with creative vision to build a better future.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src={storyImg} 
                alt="The TRIXIRT Journey" 
                fill 
                className="object-cover" 
                quality={100}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-white text-4xl font-bold font-headline">The TRIXIRT Journey</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Founded on the principles of industrial excellence and creative innovation, TRIXIRT began as a specialized provider of neodymium magnet solutions. As we grew, we recognized the interconnectedness of precision engineering and visual communication.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Today, TRIXIRT stands as a diversified industrial group. We bridge the gap between heavy industry and sustainable lifestyle solutions, proving that technical mastery can be applied as effectively to high-performance motors as it can to feeding local communities through hydroponics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Venture Stats Section */}
      <section className="py-20 bg-primary/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Settings className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-white">3</h3>
              <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Specialized Sectors</p>
            </div>
            <div className="flex justify-center flex-col space-y-4">
              <div className="flex justify-center">
                <Globe className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-white">Global</h3>
              <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Export Ready</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Zap className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Precision Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-card/30 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-12 rounded-[2rem] shadow-xl border border-white/5 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-secondary/10 transition-colors">
                <Target className="h-32 w-32" />
              </div>
              <div className="p-4 rounded-2xl bg-primary/20 inline-block">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-muted-foreground text-base relative z-10 leading-relaxed">
                To deliver uncompromising quality across our three core sectors by integrating advanced research, ethical manufacturing, and human-centric design. We strive to be the standard-bearer for precision and reliability in everything we build.
              </p>
            </div>

            <div className="bg-primary text-white p-12 rounded-[2rem] shadow-xl space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-secondary/10 transition-colors">
                <Eye className="h-32 w-32" />
              </div>
              <div className="p-4 rounded-2xl bg-white/10 inline-block">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-white/80 text-base relative z-10 leading-relaxed">
                A future where industrial efficiency and ecological sustainability coexist seamlessly. We envision TRIXIRT as a global leader in providing the critical components and creative systems that power the 21st century's technological and environmental needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-16 text-4xl font-bold text-white">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Unwavering Integrity</h3>
              <p className="text-muted-foreground text-base">Transparency in our processes and reliability in our promises.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Collaborative Excellence</h3>
              <p className="text-muted-foreground text-base">Our diverse teams working together to solve complex industrial problems.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Purposeful Innovation</h3>
              <p className="text-muted-foreground text-base">Technological advancement with a clear focus on solving real-world challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
