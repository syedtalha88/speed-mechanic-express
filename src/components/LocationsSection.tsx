import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import Locationimg from "../assets/locationimage.png";

const locations = [
  "Madhapur", "Gachibowli", "Kukatpally", "Ameerpet",
  "Secunderabad", "Banjara Hills", "Jubilee Hills", "Miyapur",
  "Kondapur", "Begumpet", "Dilsukhnagar", "LB Nagar",
];

const LocationsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <MapPin className="h-4 w-4" /> Where We Serve
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Doorstep <span className="text-primary">Bike Service</span> Across Hyderabad
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            We cover 50+ areas across Hyderabad. Our certified mechanic reaches your location on schedule.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={Locationimg}
            alt="XpMechanics bike service coverage areas across Hyderabad"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {locations.map((loc, idx) => (
            <ScrollReveal key={loc} variant="fade-up" delay={idx * 50}>
              <div className="group flex items-center gap-2 md:gap-3 p-3 md:p-4 border border-border hover:border-primary hover-glass-glow transition-all duration-300 cursor-pointer">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
                <span className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider">{loc}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal variant="fade-up" delay={600}>
        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
          Don't see your area? <a href="https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20want%20to%20check%20if%20you%20cover%20my%20area" target="_blank" rel="noopener noreferrer" className="text-primary font-bold cursor-pointer hover:underline">Contact us</a> — we probably cover it for doorstep bike service too.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default LocationsSection;
