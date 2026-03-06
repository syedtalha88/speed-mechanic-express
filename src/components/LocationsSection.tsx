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
          Our <span className="text-primary">Locations</span> in Hyderabad
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          We cover 50+ areas across Hyderabad. Our mechanic reaches your location within 30 minutes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {locations.map((loc) => (
          <div
            key={loc}
            className="group flex items-center gap-3 p-4 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <MapPin className="h-5 w-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider">{loc}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Don't see your area? <span className="text-primary font-bold cursor-pointer hover:underline">Contact us</span> — we probably cover it too.
      </p>
    </div>
  </section>
);

export default LocationsSection;
