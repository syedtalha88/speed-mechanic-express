import { Shield, Award, ThumbsUp, Clock, Users, Wrench, FileCheck } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  { icon: Shield, title: "100% Genuine Parts", desc: "We only use OEM & branded spare parts for every bike service. No cheap alternatives, ever.", stat: "100%", statLabel: "Genuine" },
  { icon: Award, title: "Certified Mechanics", desc: "Every mechanic is trained, background-verified, and certified by industry experts.", stat: "Top 5%", statLabel: "Selected" },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy with the service? We redo it at zero extra cost. No questions asked.", stat: "99.2%", statLabel: "Satisfied" },
  { icon: FileCheck, title: "Service Assurance Card", desc: "Every service includes a detailed assurance card with mechanic name, photo, and warranty details.", stat: "100%", statLabel: "Transparent" },
  { icon: Clock, title: "On-Time, Every Time", desc: "We guarantee 30-minute arrival at your doorstep or your next bike service is free.", stat: "30", statLabel: "Minutes" },
  { icon: Users, title: "12,000+ Happy Riders", desc: "Trusted by thousands of riders across Hyderabad for doorstep bike service.", stat: "12K+", statLabel: "Riders" },
  { icon: Wrench, title: "Transparent Pricing", desc: "No hidden charges on any service. You pay exactly what's quoted — upfront and honest.", stat: "₹0", statLabel: "Hidden Fees" },
];

const TrustSection = () => (
  <section className="section-padding bg-background relative overflow-hidden py-16">
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
    
    <div className="container mx-auto px-4 relative">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
            <Shield className="h-4 w-4" /> Why Trust Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Built on <span className="text-primary">Trust</span> & Precision
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto">
        {trustItems.map(({ icon: Icon, title, desc, stat, statLabel }, idx) => (
          <ScrollReveal key={title} variant={idx % 2 === 0 ? "fade-left" : "fade-right"} delay={idx * 80}>
            {/* Main Row: Desktop pe alternating direction, Mobile pe simple stack */}
            <div className={`group flex flex-col md:flex-row items-center gap-8 py-10 border-b border-border last:border-b-0 transition-all duration-500 hover:bg-primary/[0.01] ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}>
              
              {/* 1. Stat Box (Left or Right) */}
              <div className="shrink-0 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center bg-background border-2 border-primary/20 transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  <span className="font-heading text-xl md:text-3xl font-black text-primary leading-none">{stat}</span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{statLabel}</span>
                </div>
                {/* Decorative corner accent */}
                <div className={`absolute -top-1 ${idx % 2 === 1 ? "-left-1" : "-right-1"} w-4 h-4 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-all`} />
              </div>

              {/* 2. Content Area (Icon + Title + Desc) - Aligned consistently */}
              <div className={`flex-1 flex flex-col ${idx % 2 === 1 ? "md:items-end md:text-right" : "md:items-start md:text-left"} text-center`}>
                <div className={`flex flex-col ${idx % 2 === 1 ? "md:items-end" : "md:items-start"} items-center gap-3 mb-2`}>
                  <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {desc}
                </p>
                {/* Visual line that grows on hover */}
                <div className={`mt-4 h-0.5 bg-primary/20 w-16 transition-all duration-500 group-hover:w-full max-w-xs ${idx % 2 === 1 ? "md:ml-auto" : "md:mr-auto"}`} />
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;