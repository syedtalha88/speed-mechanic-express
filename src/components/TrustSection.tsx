import { Shield, Award, ThumbsUp, Clock, Users, Wrench } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "100% Genuine Parts", desc: "We only use OEM & branded spare parts for every bike service. No cheap alternatives, ever.", stat: "100%", statLabel: "Genuine" },
  { icon: Award, title: "Certified Mechanics", desc: "Every mechanic is trained, background-verified, and certified by industry experts.", stat: "Top 5%", statLabel: "Selected" },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy with the service? We redo it at zero extra cost. No questions asked.", stat: "99.2%", statLabel: "Satisfied" },
  { icon: Clock, title: "On-Time, Every Time", desc: "We guarantee 30-minute arrival at your doorstep or your next bike service is free.", stat: "30", statLabel: "Minutes" },
  { icon: Users, title: "12,000+ Happy Riders", desc: "Trusted by thousands of riders across Hyderabad for doorstep bike service.", stat: "12K+", statLabel: "Riders" },
  { icon: Wrench, title: "Transparent Pricing", desc: "No hidden charges on any service. You pay exactly what's quoted — upfront and honest.", stat: "₹0", statLabel: "Hidden Fees" },
];

const TrustSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Subtle background texture */}
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
    
    <div className="container mx-auto relative">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Shield className="h-4 w-4" /> Why Trust Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Built on <span className="text-primary">Trust</span> & Precision
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We don't just fix bikes. We build lasting relationships with riders who demand the best doorstep bike service in Hyderabad.
        </p>
      </div>

      {/* Alternating row layout - NO cards */}
      <div className="space-y-0">
        {trustItems.map(({ icon: Icon, title, desc, stat, statLabel }, idx) => (
          <div
            key={title}
            className={`group flex flex-col md:flex-row items-center gap-6 md:gap-12 py-8 border-b border-border last:border-b-0 transition-all duration-500 hover:bg-primary/[0.02] ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Stat highlight */}
            <div className="shrink-0 w-28 h-28 flex flex-col items-center justify-center glass-primary transition-all duration-500 group-hover:shadow-lg">
              <span className="font-heading text-2xl md:text-3xl font-black text-primary">{stat}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{statLabel}</span>
            </div>

            {/* Icon */}
            <div className="shrink-0">
              <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[-8deg]" />
            </div>

            {/* Content */}
            <div className={`flex-1 ${idx % 2 === 1 ? "md:text-right" : ""}`}>
              <h3 className="font-heading text-lg font-bold uppercase mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{desc}</p>
            </div>

            {/* Progress bar visual */}
            <div className="hidden md:block w-32 h-1.5 bg-border overflow-hidden">
              <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
