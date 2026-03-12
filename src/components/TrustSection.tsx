import { Shield, Award, ThumbsUp, Clock, Users, Wrench, FileCheck } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  { icon: Shield, title: "100% Genuine Parts", desc: "We only use OEM & branded spare parts for every bike service. No cheap alternatives, ever.", stat: "100%", statLabel: "Genuine" },
  { icon: Award, title: "Certified Mechanics", desc: "Every mechanic is trained, background-verified, and certified by industry experts.", stat: "Top 5%", statLabel: "Selected" },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy with the service? We redo it at zero extra cost. No questions asked.", stat: "99.2%", statLabel: "Satisfied" },
  { icon: FileCheck, title: "Service Assurance Card", desc: "Every service includes a detailed assurance card with mechanic name, photo, parts list, work summary & warranty details — so you know exactly what was done and by whom.", stat: "100%", statLabel: "Transparent" },
  { icon: Clock, title: "On-Time, Every Time", desc: "We guarantee 30-minute arrival at your doorstep or your next bike service is free.", stat: "30", statLabel: "Minutes" },
  { icon: Users, title: "12,000+ Happy Riders", desc: "Trusted by thousands of riders across Hyderabad for doorstep bike service.", stat: "12K+", statLabel: "Riders" },
  { icon: Wrench, title: "Transparent Pricing", desc: "No hidden charges on any service. You pay exactly what's quoted — upfront and honest.", stat: "₹0", statLabel: "Hidden Fees" },
];

const TrustSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
    
    <div className="container mx-auto relative">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Shield className="h-4 w-4" /> Why Trust Us
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Built on <span className="text-primary">Trust</span> & Precision
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            We don't just fix bikes. We build lasting relationships with riders who demand the best doorstep bike service in Hyderabad.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-0">
        {trustItems.map(({ icon: Icon, title, desc, stat, statLabel }, idx) => (
          <ScrollReveal key={title} variant={idx % 2 === 0 ? "fade-left" : "fade-right"} delay={idx * 80}>
            <div className={`group flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-12 py-6 md:py-8 border-b border-border last:border-b-0 transition-all duration-500 hover:bg-primary/[0.02] ${
              idx % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}>
              <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center glass-primary transition-all duration-500 group-hover:shadow-lg">
                <span className="font-heading text-xl md:text-3xl font-black text-primary">{stat}</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{statLabel}</span>
              </div>
              <div className="shrink-0">
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[-8deg]" />
              </div>
              <div className={`flex-1 text-center sm:text-left ${idx % 2 === 1 ? "sm:text-right" : ""}`}>
                <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-1">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md">{desc}</p>
              </div>
              <div className="hidden md:block w-32 h-1.5 bg-border overflow-hidden">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;