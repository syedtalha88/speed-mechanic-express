import { Star } from "lucide-react";

const highlights = [
  "Genuine Parts Only",
  "Certified Mechanics",
  "Free Pickup & Drop",
  "Same-Day Service",
  "Transparent Pricing",
  "12,000+ Happy Riders",
  "Up to 6-Month Warranty",
  "50+ Areas in Hyderabad",
];

const RatingsMarquee = () => (
  <section className="bg-foreground py-4 overflow-hidden border-y-4 border-primary relative">
    {/* Glass sheen */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
    
    <div className="flex animate-marquee whitespace-nowrap relative">
      {[...highlights, ...highlights].map((text, i) => (
        <div key={i} className="flex items-center gap-3 mx-8">
          <Star className="h-4 w-4 text-primary fill-primary" />
          <span className="text-sm font-bold text-background uppercase tracking-wider">
            {text}
          </span>
          <span className="text-primary font-black mx-4">★</span>
        </div>
      ))}
    </div>
  </section>
);

export default RatingsMarquee;
