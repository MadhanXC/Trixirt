"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our team will review your message and get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="font-headline text-4xl font-bold text-white">Get in <span className="text-secondary">Touch</span></h1>
                <p className="text-muted-foreground text-base max-w-md">
                  Have a specific project in mind? We offer expert consultation for all our industrial and creative services.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-primary text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-1 text-white">Visit Us</h3>
                    <p className="text-muted-foreground text-base">Madurai, India.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-secondary text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-1 text-white">Email Us</h3>
                    <p className="text-muted-foreground text-base">contact@trixirt.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-primary/20 text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-1 text-white">Call Us</h3>
                    <p className="text-muted-foreground text-base">+91 98421 03553</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                  <h4 className="font-headline font-bold text-base text-white">Support Hours</h4>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our technical support and sales teams are available around the clock for global clients. We aim for a response time under 2 hours during business operations.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border">
              <h2 className="font-headline text-xl font-bold mb-8 text-white">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-base font-medium text-muted-foreground ml-1">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-secondary text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-base font-medium text-muted-foreground ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-secondary text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-base font-medium text-muted-foreground ml-1">Interest Sector</label>
                  <Select defaultValue="general">
                    <SelectTrigger className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-secondary text-white">
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border text-white">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="magnets">Neodymium Magnets</SelectItem>
                      <SelectItem value="signages">Creative Signages</SelectItem>
                      <SelectItem value="hydroponics">Hydroponic Farming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-base font-medium text-muted-foreground ml-1">Project Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements or questions..." 
                    required 
                    className="bg-background border-border min-h-[150px] rounded-xl focus:ring-2 focus:ring-secondary resize-none text-white" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-secondary hover:bg-white text-primary h-14 rounded-xl font-bold text-base transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send className="ml-2 h-5 w-5" />}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground pt-4">
                  By submitting this form, you agree to our privacy policy and data processing.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}