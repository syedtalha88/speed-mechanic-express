import { Wrench, Droplets, Battery, Disc3, Settings, Gauge, ArrowRight, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wrench, title: "General Service", desc: "Complete 40-point inspection, cleaning, and tuning — at your doorstep. No workshop visit needed.", price: "₹499" },
  { icon: Droplets, title: "Oil Change", desc: "Premium engine oil replacement with filter cleaning. Free pickup and drop across Hyderabad.", price: "₹299" },
  { icon: Battery, title: "Battery Service", desc: "Battery testing, charging, and replacement. Mechanic at your location within 30 minutes.", price: "₹199" },
  { icon: Disc3, title: "Brake Service", desc: "Brake pad replacement, disc cleaning, and hydraulic fluid top-up with genuine parts only.", price: "₹349" },
  { icon: Settings, title: "Engine Overhaul", desc: "Full engine strip-down, cleaning, and rebuild. We save your time with doorstep service.", price: "₹2,999" },
  { icon: Gauge, title: "Performance Tuning", desc: "Carburetor tuning, chain adjustment, and optimization. Expert bike service in Hyderabad.", price: "₹599" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Settings className="h-4 w-4" /> Our Services
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Doorstep <span className="text-primary">Bike Service</span> in Hyderabad
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From routine maintenance to major repairs — we handle everything at your doorstep with precision. Free pickup and drop included.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, price }, idx) => {
          // Varied card styles
          if (idx === 0) {
            // Featured - glass primary
            return (
              <div key={title} className="group glass-primary bg-card relative overflow-hidden hover-glass-glow cursor-pointer transition-all duration-500">
                <div className="h-1 bg-primary" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                      <Icon className="h-7 w-7 text-primary-foreground transition-transform duration-500 group-hover:rotate-[-15deg]" />
                    </div>
                    <span className="font-heading text-2xl font-black text-primary">{price}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-1 text-sm font-bold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          }
          // Standard cards with hover variety
          return (
            <div key={title} className="group bg-card border border-border relative overflow-hidden cursor-pointer transition-all duration-500 hover-glass-glow">
              <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-[-10deg]" />
                  </div>
                  <span className="font-heading text-xl font-black text-primary">{price}</span>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-sm font-bold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Book Now <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link to="/services">
          <button className="group inline-flex items-center gap-2 mechanical-btn border-2 border-foreground text-foreground font-heading font-bold uppercase text-sm px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-300 relative overflow-hidden">
            View All Services
            <Cog className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
