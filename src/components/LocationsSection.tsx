import { MapPin } from "lucide-react";

const locations = [
  "Madhapur", "Gachibowli", "Kukatpally", "Ameerpet",
  "Secunderabad", "Banjara Hills", "Jubilee Hills", "Miyapur",
  "Kondapur", "Begumpet", "Dilsukhnagar", "LB Nagar",
];

const LocationsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <MapPin className="h-4 w-4" /> Where We Serve
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Doorstep <span className="text-primary">Bike Service</span> Across Hyderabad
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We cover 50+ areas across Hyderabad. Our certified mechanic reaches your location within 30 minutes — guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Map image */}
        <div className="relative group">
          <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)' }}>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt="Map showing MotoFix bike service coverage areas across Hyderabad"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-dark px-5 py-3">
              <p className="text-primary-foreground font-heading text-sm font-bold uppercase">
                <MapPin className="h-4 w-4 inline text-primary mr-1" /> 50+ Areas Covered
              </p>
            </div>
          </div>
          {/* Animated pin indicators */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
          <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-primary rounded-full animate-pulse-glow delay-300" />
          <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-glow delay-500" />
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {locations.map((loc) => (
            <div
              key={loc}
              className="group flex items-center gap-3 p-4 border border-border hover:border-primary hover-glass-glow transition-all duration-300 cursor-pointer"
            >
              <MapPin className="h-5 w-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]" />
              <span className="font-heading text-sm font-bold uppercase tracking-wider">{loc}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Don't see your area? <span className="text-primary font-bold cursor-pointer hover:underline">Contact us</span> — we probably cover it for doorstep bike service too.
      </p>
    </div>
  </section>
);

export default LocationsSection;
