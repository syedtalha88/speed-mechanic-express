import { Wrench, Shield, Truck, Clock, Star, Zap } from "lucide-react";

const highlights = [
  { icon: Wrench, text: "Genuine Parts Only" },
  { icon: Shield, text: "6-Month Warranty" },
  { icon: Truck, text: "Free Pickup & Drop" },
  { icon: Clock, text: "Quick Response Time" },
  { icon: Star, text: "Certified Mechanics" },
  { icon: Zap, text: "Transparent Pricing" },
  { icon: Wrench, text: "Genuine Parts Only" },
  { icon: Shield, text: "6-Month Warranty" },
  { icon: Truck, text: "Free Pickup & Drop" },
  { icon: Clock, text: "Quick Response Time" },
  { icon: Star, text: "Certified Mechanics" },
  { icon: Zap, text: "Transparent Pricing" },
];

const RatingsMarquee = () => (
  <section className="bg-foreground py-4 overflow-hidden border-y-4 border-primary relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
    
    <div className="flex animate-marquee whitespace-nowrap relative">
      {[...highlights, ...highlights].map((h, i) => (
        <div key={i} className="flex items-center gap-3 mx-8">
          <h.icon className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-background uppercase tracking-wider">
            {h.text}
          </span>
          <span className="text-primary font-black mx-4">★</span>
        </div>
      ))}
    </div>
  </section>
);

export default RatingsMarquee;
