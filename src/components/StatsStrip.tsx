import { Wrench, Users, MapPin, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years Experience" },
  { icon: Users, value: "12,000+", label: "Happy Customers" },
  { icon: Wrench, value: "25,000+", label: "Bikes Serviced" },
  { icon: MapPin, value: "50+", label: "Areas Covered" },
];

const StatsStrip = () => (
  <section className="bg-primary py-12 relative overflow-hidden">
    {/* Glass overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="group text-center text-primary-foreground">
            <Icon className="h-8 w-8 mx-auto mb-3 opacity-80 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[-10deg]" />
            <div className="font-heading text-3xl md:text-4xl font-black">{value}</div>
            <div className="text-sm font-bold uppercase tracking-wider opacity-80 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
