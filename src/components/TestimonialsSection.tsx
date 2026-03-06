import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", area: "Madhapur", text: "MotoFix serviced my RE Classic 350 at my office parking. The mechanic was on time, professional, and the bike runs like new. Highly recommended!", rating: 5 },
  { name: "Priya Reddy", area: "Gachibowli", text: "I was tired of workshop queues. MotoFix picked up my Activa, serviced it, and dropped it back the same day. Incredible convenience!", rating: 5 },
  { name: "Vikram Patel", area: "Kukatpally", text: "Transparent pricing, genuine parts, and a mechanic who actually explained what was wrong. This is how bike service should be.", rating: 5 },
  { name: "Ananya Devi", area: "Jubilee Hills", text: "The 30-minute response is real. I booked at 10 AM, mechanic was here by 10:25. Impressive speed and quality work!", rating: 5 },
  { name: "Karthik M.", area: "Ameerpet", text: "Best oil change service I've ever had. The mechanic used premium oil, cleaned the filter, and even topped up the coolant. Great value.", rating: 5 },
  { name: "Deepak Rao", area: "Secunderabad", text: "My Pulsar needed brake pads and chain replacement. MotoFix handled it in 2 hours at my home. Saved me half a day!", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Star className="h-4 w-4" /> Real Reviews
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          What <span className="text-primary">Riders</span> Say About Us
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Don't take our word for it. Hear from riders who chose MotoFix.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="group bg-card border border-border p-6 hover-lift relative">
            <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div className="border-t border-border pt-3">
              <p className="font-heading text-sm font-bold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.area}, Hyderabad</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
