import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-primary/20 text-secondary">
                <Shield className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-4xl font-headline font-bold text-white">Privacy Policy</h1>
            <p className="text-muted-foreground text-base">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-12">
            
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <FileText className="h-6 w-6" />
                <h2 className="text-xl font-headline font-bold text-white">1. Introduction</h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                TRIXIRT Industrial Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and interact with our industrial services.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Lock className="h-6 w-6" />
                <h2 className="text-xl font-headline font-bold text-white">2. Information Collection</h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                We collect information that you provide directly to us through our contact forms, inquiry systems, and email communications. This may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-base space-y-2 ml-4">
                <li>Name and contact details (email, phone number)</li>
                <li>Professional details and organizational information</li>
                <li>Project requirements and technical specifications</li>
                <li>Shipping and logistics information for global orders</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Eye className="h-6 w-6" />
                <h2 className="text-xl font-headline font-bold text-white">3. How We Use Your Data</h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your information is used solely to facilitate industrial collaboration and service delivery:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-base space-y-2 ml-4">
                <li>Responding to bulk inquiries and custom quotes</li>
                <li>Managing global export logistics and documentation</li>
                <li>Providing technical support for magnets and agricultural systems</li>
                <li>Improving our digital interface and user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Shield className="h-6 w-6" />
                <h2 className="text-xl font-headline font-bold text-white">4. Data Protection</h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                We implement robust industrial-standard security measures to protect your professional data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for the purpose of fulfilling international logistics and export requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-headline font-bold text-white">5. Contact Information</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                If you have any questions regarding this privacy policy or our data handling practices, please contact our data compliance team at:
              </p>
              <div className="p-6 rounded-2xl bg-background border border-white/5">
                <p className="text-white font-bold">TRIXIRT Industrial Group</p>
                <p className="text-muted-foreground text-base">Madurai, India.</p>
                <p className="text-secondary font-bold mt-2">contact@trixirt.com</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
