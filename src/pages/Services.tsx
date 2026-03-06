import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Droplets, Battery, Disc3, Settings, Gauge, Cog, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
  { icon: Wrench, title: "General Bike Service", price: "₹499", desc: "Complete 40-point inspection, cleaning, lubrication, and tuning for all bike brands. Includes chain adjustment, cable lubrication, and minor fixes.", time: "2-3 hours" },
  { icon: Droplets, title: "Oil Change", price: "₹299", desc: "Premium engine oil replacement with filter cleaning. We use branded oils — Motul, Castrol, Shell. Keeps your engine running smooth and cool.", time: "30-45 mins" },
  { icon: Battery, title: "Battery Replacement", price: "₹199+", desc: "Battery testing, charging, and replacement. We stock all major brands — Exide, Amaron, SF Sonic. Installation included.", time: "20-30 mins" },
  { icon: Disc3, title: "Brake Service", price: "₹349", desc: "Brake pad replacement, disc cleaning, drum adjustment, and hydraulic fluid top-up. Ensures maximum stopping power.", time: "1-2 hours" },
  { icon: Settings, title: "Engine Overhaul", price: "₹2,999+", desc: "Full engine strip-down, cleaning, reboring, piston replacement, and rebuild with genuine parts. For bikes that need serious attention.", time: "1-2 days" },
  { icon: Gauge, title: "Performance Tuning", price: "₹599", desc: "Carburetor tuning, chain sprocket adjustment, air filter replacement, and throttle response optimization for peak performance.", time: "1-2 hours" },
  { icon: Cog, title: "Clutch Plate Service", price: "₹799+", desc: "Clutch plate inspection, adjustment, and replacement. Ensures smooth gear shifts and prevents clutch slipping.", time: "2-3 hours" },
  { icon: Zap, title: "Electrical Diagnostics", price: "₹399", desc: "Complete electrical system check — wiring, headlights, indicators, horn, starter motor, and charging system diagnostics.", time: "1-2 hours" },
];

const ServicesPage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine oil changes to complete engine overhauls — we handle every bike service need at your doorstep in Hyderabad.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allServices.map(({ icon: Icon, title, price, desc, time }) => (
              <div key={title} className="group bg-card border border-border hover-lift overflow-hidden">
                <div className="h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-black text-primary block">{price}</span>
                      <span className="text-xs text-muted-foreground">{time}</span>
                    </div>
                  </div>
                  <h2 className="font-heading text-xl font-bold uppercase mb-2">{title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <Button className="bg-primary text-primary-foreground font-heading font-bold uppercase text-sm hover:bg-accent transition-all group/btn">
                    Book Now <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ServicesPage;
