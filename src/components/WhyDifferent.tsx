import { Clock, Truck, IndianRupee, Wrench, ShieldCheck, Zap } from "lucide-react";

const points = [
  { icon: Clock, title: "30-Minute Response", desc: "No waiting for days. Our mechanic is at your doorstep in 30 minutes flat. Guaranteed or your next service is free.", num: "01" },
  { icon: Truck, title: "Free Pickup & Drop", desc: "We pick up your bike, service it with genuine parts, and bring it back. You don't move an inch.", num: "02" },
  { icon: Zap, title: "We Save Your Time", desc: "No riding to workshops. No queues. No chasing mechanics. We come to you — doorstep bike service that respects your time.", num: "03" },
  { icon: IndianRupee, title: "Upfront Pricing", desc: "Know exactly what you'll pay before we start. No hidden charges, no surprise extras.", num: "04" },
  { icon: ShieldCheck, title: "6-Month Warranty", desc: "Every service comes with a 6-month warranty on parts and labour. That's our confidence.", num: "05" },
  { icon: Wrench, title: "Expert-Only Team", desc: "Only the top 5% of applicants make it through our mechanic selection and certification process.", num: "06" },
];

const WhyDifferent = () => (
  <section className="section-padding bg-foreground text-background relative overflow-hidden">
    {/* Glass decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto relative">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> The MotoFix Difference
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Why Riders <span className="text-primary">Choose Us</span> Over Workshops
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We re-engineered the entire bike service experience in Hyderabad. Here's why 12,000+ riders trust us.
        </p>
      </div>

      {/* Bento-style grid with variety */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map(({ icon: Icon, title, desc, num }, idx) => {
          // Alternate between different visual styles
          if (idx === 0) {
            // Large featured glass card
            return (
              <div key={title} className="group glass-frosted p-8 md:col-span-2 lg:col-span-1 hover-glass-glow transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-4 right-4 font-heading text-6xl font-black text-primary/10">{num}</div>
                <Icon className="h-10 w-10 text-primary mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]" />
                <h3 className="font-heading text-xl font-bold uppercase mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            );
          }
          if (idx === 1) {
            // Primary accent card
            return (
              <div key={title} className="group bg-primary p-8 hover-lift transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-4 right-4 font-heading text-6xl font-black text-primary-foreground/10">{num}</div>
                <Icon className="h-10 w-10 text-primary-foreground mb-5 transition-all duration-500 group-hover:scale-110" />
                <h3 className="font-heading text-xl font-bold uppercase mb-3 text-primary-foreground">{title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
              </div>
            );
          }
          // Default glass style with variations
          return (
            <div key={title} className="group glass-frosted p-7 hover-glass-glow transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-4 right-4 font-heading text-5xl font-black text-primary/10">{num}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 glass-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyDifferent;
