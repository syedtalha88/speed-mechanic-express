import { Phone, Wrench, Truck, CheckCircle, Cog } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Book Online", desc: "Fill the form or call us. Takes just 30 seconds to get started." },
  { icon: Wrench, num: "02", title: "Mechanic Arrives", desc: "Our certified expert reaches your doorstep within 30 minutes." },
  { icon: Truck, num: "03", title: "Free Pickup", desc: "We pick up your bike, service it with genuine parts, and drop it back." },
  { icon: CheckCircle, num: "04", title: "Done & Dusted", desc: "Ride your perfectly serviced bike. Zero hassle, total satisfaction." },
];

const HowItWorks = () => (
  <section className="section-padding bg-secondary relative overflow-hidden">
    {/* Decorative background gear */}
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03]">
      <Cog className="w-96 h-96 animate-spin-slow" />
    </div>

    <div className="container mx-auto relative">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> Simple Process
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          How Doorstep <span className="text-primary">Bike Service</span> Works
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Getting your bike serviced in Hyderabad has never been easier. Four steps. That's it.
        </p>
      </div>

      {/* Timeline layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central connector line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

        {steps.map(({ icon: Icon, num, title, desc }, idx) => (
          <div
            key={num}
            className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:flex-row`}
          >
            {/* Content card */}
            <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <div className="group glass-card p-6 hover-glass-glow transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-lg font-bold uppercase">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>

            {/* Center node */}
            <div className="relative z-10 w-14 h-14 shrink-0 bg-primary flex items-center justify-center border-4 border-background shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-110">
              <span className="font-heading text-sm font-black text-primary-foreground">{num}</span>
              {/* Pulse ring */}
              <div className="absolute inset-0 border-2 border-primary animate-ping opacity-20" />
            </div>

            {/* Spacer for layout */}
            <div className="flex-1 hidden md:block" />

            {/* Connecting arrow - mechanical bolt style */}
            {idx < steps.length - 1 && (
              <div className="md:hidden flex flex-col items-center my-2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-primary/30" />
                <div className="w-3 h-3 border-r-2 border-b-2 border-primary rotate-45 -mt-1" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
