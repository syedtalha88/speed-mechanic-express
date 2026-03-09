import { Star, Quote, Bike } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", area: "Madhapur", bike: "RE Classic 350", text: "MotoFix serviced my Classic 350 at my office parking. The mechanic arrived in 25 minutes, was super professional, and my bike runs like new. Best doorstep bike service!", rating: 5 },
  { name: "Priya Reddy", area: "Gachibowli", bike: "Honda Activa", text: "I was tired of workshop queues. MotoFix picked up my Activa, serviced it, and dropped it back the same day. The free pickup and drop saved me so much time!", rating: 5 },
  { name: "Vikram Patel", area: "Kukatpally", bike: "Bajaj Pulsar", text: "Transparent pricing, genuine parts, and a mechanic who actually explained what was wrong. This is how bike service in Hyderabad should be.", rating: 5 },
  { name: "Ananya Devi", area: "Jubilee Hills", bike: "TVS Jupiter", text: "The 30-minute response is real! I booked at 10 AM, mechanic was here by 10:25. No more wasting time at workshops. Incredible convenience!", rating: 5 },
  { name: "Karthik M.", area: "Ameerpet", bike: "Yamaha FZ", text: "Best oil change service ever. The mechanic used premium oil, cleaned the filter, topped up coolant — all at my doorstep. Great value for money.", rating: 5 },
  { name: "Deepak Rao", area: "Secunderabad", bike: "RE Himalayan", text: "My Himalayan needed brake pads and chain replacement. MotoFix handled it in 2 hours at my home. Their free pickup and drop saved me half a day!", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Star className="h-4 w-4" /> Customer Reviews
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Real reviews from real riders who chose MotoFix for doorstep bike service in Hyderabad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className={`group relative overflow-hidden transition-all duration-500 hover-glass-glow ${
            i === 0 ? "glass-card p-6" : i === 1 ? "bg-foreground text-background p-6" : "glass-primary p-6 bg-card border border-border"
          }`}>
            {/* Decorative quote */}
            <Quote className={`h-10 w-10 absolute top-4 right-4 transition-transform duration-300 group-hover:scale-110 ${
              i === 1 ? "text-background/10" : "text-primary/10"
            }`} />

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 text-primary fill-primary" />
              ))}
            </div>

            {/* Review text */}
            <p className={`text-sm leading-relaxed mb-5 ${i === 1 ? "text-background/90" : "text-foreground"}`}>
              "{t.text}"
            </p>

            {/* Customer info with bike */}
            <div className={`border-t pt-4 ${i === 1 ? "border-background/10" : "border-border"}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center ${
                  i === 1 ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <span className="font-heading text-sm font-black text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold">{t.name}</p>
                  <div className="flex items-center gap-1.5">
                    <Bike className="h-3 w-3 text-primary" />
                    <p className={`text-xs ${i === 1 ? "text-background/60" : "text-muted-foreground"}`}>
                      {t.bike} · {t.area}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
