import { Shield, Award, ThumbsUp, Clock, Users, Wrench } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "100% Genuine Parts", desc: "We only use OEM & branded spare parts. No cheap alternatives." },
  { icon: Award, title: "Certified Mechanics", desc: "Every mechanic is trained, background-verified, and certified." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy? We redo the service at zero extra cost." },
  { icon: Clock, title: "On-Time, Every Time", desc: "We guarantee 30-minute arrival or your next service is free." },
  { icon: Users, title: "12,000+ Happy Riders", desc: "Trusted by thousands of riders across Hyderabad." },
  { icon: Wrench, title: "Transparent Pricing", desc: "No hidden charges. You pay exactly what's quoted." },
];

const TrustSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Shield className="h-4 w-4" /> Why Trust Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Built on <span className="text-primary">Trust</span> & Precision
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We don't just fix bikes. We build lasting relationships with riders who demand the best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustItems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group flex gap-4 p-6 border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold uppercase mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
