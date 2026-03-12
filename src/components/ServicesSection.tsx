import { Wrench, Droplets, Battery, Disc3, Settings, Gauge, ArrowRight, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/919347732437?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20";

const services = [
  {
    icon: Wrench, title: "General Service", price: "₹499",
    desc: "Complete inspection, cleaning, and tuning — right at your location.",
    points: ["40-point bike inspection", "Air & oil filter cleaning", "Chain lubrication & adjustment", "Brake & clutch tuning"],
  },
  {
    icon: Droplets, title: "Oil Change", price: "₹299",
    desc: "Premium engine oil replacement to keep your ride smooth.",
    points: ["Branded engine oil replacement", "Oil filter cleaning", "Drain plug washer check", "Engine sound inspection"],
  },
  {
    icon: Battery, title: "Battery Service", price: "₹199",
    desc: "Testing, charging, and replacement with reliable batteries.",
    points: ["Voltage & load testing", "Terminal cleaning & tightening", "Electrolyte level check", "New battery installation if needed"],
  },
  {
    icon: Disc3, title: "Brake Service", price: "₹349",
    desc: "Complete brake system care for safe, confident riding.",
    points: ["Brake pad inspection & replacement", "Disc cleaning & resurfacing", "Hydraulic fluid top-up", "Brake cable adjustment"],
  },
  {
    icon: Settings, title: "Engine Overhaul", price: "₹2,999",
    desc: "Full engine rebuild by XpMechanics certified experts.",
    points: ["Complete engine strip-down", "Piston & ring replacement", "Gasket & seal renewal", "Performance testing after rebuild"],
  },
  {
    icon: Gauge, title: "Performance Tuning", price: "₹599",
    desc: "Fine-tune your bike for peak power and fuel efficiency.",
    points: ["Carburetor/FI tuning", "Chain & sprocket adjustment", "Throttle response optimization", "Idle speed calibration"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Settings className="h-4 w-4" /> XpMechanics Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Professional <span className="text-primary">Bike Service</span> at Your Doorstep
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            From routine maintenance to major repairs — XpMechanics handles everything with precision and genuine parts.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map(({ icon: Icon, title, desc, price, points }, idx) => (
          <ScrollReveal key={title} variant={idx % 2 === 0 ? "fade-up" : "scale"} delay={idx * 80}>
            {idx === 0 ? (
              <div className="group glass-primary bg-card relative overflow-hidden hover-glass-glow cursor-pointer transition-all duration-500 h-full">
                <div className="h-1 bg-primary" />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground transition-transform duration-500 group-hover:rotate-[-15deg]" />
                    </div>
                    <span className="font-heading text-xl md:text-2xl font-black text-primary">{price}</span>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href={`${WA_LINK}${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs md:text-sm font-bold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="group bg-card border border-border relative overflow-hidden cursor-pointer transition-all duration-500 hover-glass-glow h-full">
                <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-[-10deg]" />
                    </div>
                    <span className="font-heading text-lg md:text-xl font-black text-primary">{price}</span>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href={`${WA_LINK}${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs md:text-sm font-bold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="fade-up" delay={500}>
        <div className="text-center mt-8 md:mt-10">
          <Link to="/services">
            <button className="group inline-flex items-center gap-2 mechanical-btn border-2 border-foreground text-foreground font-heading font-bold uppercase text-xs md:text-sm px-8 md:px-10 py-3.5 md:py-4 hover:bg-foreground hover:text-background transition-all duration-300 relative overflow-hidden">
              View All Services
              <Cog className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
            </button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ServicesSection;
