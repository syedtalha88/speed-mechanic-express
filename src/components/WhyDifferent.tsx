import { Clock, Truck, IndianRupee, Wrench, ShieldCheck, Zap } from "lucide-react";

const points = [
  { icon: Clock, title: "30-Minute Response", desc: "No waiting for days. Our mechanic is at your doorstep in 30 minutes flat." },
  { icon: Truck, title: "Free Pickup & Drop", desc: "We pick up your bike, service it, and bring it back. You don't move an inch." },
  { icon: Zap, title: "Save Your Time", desc: "No more riding to workshops, waiting in queues, or chasing mechanics." },
  { icon: IndianRupee, title: "Upfront Pricing", desc: "Know exactly what you'll pay before we start. No surprises, no extras." },
  { icon: ShieldCheck, title: "6-Month Warranty", desc: "Every service comes with a 6-month warranty on parts and labour." },
  { icon: Wrench, title: "Expert-Only Team", desc: "Only top 5% of applicants make it through our mechanic selection process." },
];

const WhyDifferent = () => (
  <section className="section-padding bg-foreground text-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> The MotoFix Difference
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Why Riders <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We re-engineered the entire bike service experience. Here's why we're different.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group p-6 border border-muted-foreground/20 hover:border-primary transition-all duration-300">
            <Icon className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferent;
