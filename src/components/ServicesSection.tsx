import { Wrench, Droplets, Battery, Disc3, Settings, Gauge, ArrowRight, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20";

const services = [
  { 
    icon: Wrench, 
    title: "General Service (For 100cc Below)", 
    desc: "Complete 40-point inspection, cleaning, and tuning — at your doorstep. No workshop visit needed.", 
    price: "₹499" 
  },
  { 
    icon: Droplets, 
    title: "Oil Change (For 100cc Below)", 
    desc: "Premium engine oil replacement with filter cleaning.", 
    price: "₹299" 
  },
  { 
    icon: Battery, 
    title: "Battery Service (For 100cc Below)", 
    desc: "Battery testing, charging, and replacement. Mechanic arrives at your scheduled time.", 
    price: "₹199" 
  },
  { 
    icon: Disc3, 
    title: "Brake Service (For 100cc Below)", 
    desc: "Brake pad replacement, disc cleaning, and hydraulic fluid top-up with genuine parts only.", 
    price: "₹349" 
  },
  { 
    icon: Settings, 
    title: "Engine Overhaul (For 100cc Below)", 
    desc: "Full engine strip-down, cleaning, and rebuild. We save your time with doorstep service.", 
    price: "₹2,999" 
  },
  { 
    icon: Gauge, 
    title: "Performance Tuning (For 100cc Below)", 
    desc: "Carburetor tuning, chain adjustment, and optimization. Expert bike service in Hyderabad.", 
    price: "₹599" 
  },
];
const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Settings className="h-4 w-4" /> Our Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Doorstep <span className="text-primary">Bike Service</span> in Hyderabad
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            From routine maintenance to major repairs — we handle everything at your doorstep with precision. 
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map(({ icon: Icon, title, desc, price }, idx) => (
          <ScrollReveal key={title} variant={idx % 2 === 0 ? "fade-up" : "scale"} delay={idx * 80}>
            {idx === 0 ? (
              <div className="group glass-primary bg-card relative overflow-hidden hover-glass-glow cursor-pointer transition-all duration-500 h-full">
                <div className="h-1 bg-primary" />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground transition-transform duration-500 group-hover:rotate-[-15deg]" />
                    </div>
                    <span className="font-heading text-xl md:text-2xl font-black text-primary">{price}</span>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <a href={`${WA_LINK}${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs md:text-sm font-bold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="group bg-card border border-border relative overflow-hidden cursor-pointer transition-all duration-500 hover-glass-glow h-full">
                <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-[-10deg]" />
                    </div>
                    <span className="font-heading text-lg md:text-xl font-black text-primary">{price}</span>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
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