import { Wrench, Droplets, Battery, Disc3, Settings, Gauge, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wrench, title: "General Service", desc: "Complete bike check-up with 40+ point inspection, cleaning, and tuning.", price: "₹499" },
  { icon: Droplets, title: "Oil Change", desc: "Premium engine oil replacement with filter cleaning for smooth performance.", price: "₹299" },
  { icon: Battery, title: "Battery Service", desc: "Battery testing, charging, and replacement. All major brands available.", price: "₹199" },
  { icon: Disc3, title: "Brake Service", desc: "Brake pad replacement, disc cleaning, and hydraulic fluid top-up.", price: "₹349" },
  { icon: Settings, title: "Engine Overhaul", desc: "Full engine strip-down, cleaning, rebuild with genuine parts.", price: "₹2,999" },
  { icon: Gauge, title: "Performance Tuning", desc: "Carburetor tuning, chain adjustment, and performance optimization.", price: "₹599" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Settings className="h-4 w-4" /> What We Do
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From routine maintenance to major repairs — we handle everything at your doorstep with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, price }) => (
          <div
            key={title}
            className="group bg-card border border-border hover-lift cursor-pointer overflow-hidden"
          >
            <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services">
          <button className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-heading font-bold uppercase text-sm px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 group">
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
