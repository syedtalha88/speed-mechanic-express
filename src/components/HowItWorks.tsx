import { Phone, Wrench, Truck, CheckCircle, Cog, FileCheck } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Phone, num: "01", title: "Book Online", desc: "Fill the form or call us. Takes just 30 seconds to get started." },
  { icon: Wrench, num: "02", title: "Mechanic Arrives", desc: "Our certified expert reaches your doorstep within 30 minutes." },
  { icon: Truck, num: "03", title: "Free Pickup", desc: "We pick up your bike, service it with genuine parts, and drop it back." },
  { icon: FileCheck, num: "04", title: "Service Assurance Card", desc: "Receive a detailed card with mechanic info, parts used, work done & warranty — for total transparency." },
  { icon: CheckCircle, num: "05", title: "Done & Dusted", desc: "Ride your perfectly serviced bike. Zero hassle, total satisfaction." },
];

const HowItWorks = () => (
  <section className="section-padding bg-secondary relative overflow-hidden">
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03]">
      <Cog className="w-60 h-60 md:w-96 md:h-96 animate-spin-slow" />
    </div>

    <div className="container mx-auto relative">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Wrench className="h-4 w-4" /> Simple Process
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            How Doorstep <span className="text-primary">Bike Service</span> Works
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Getting your bike serviced in Hyderabad has never been easier. Five steps. That's it.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        {/* Central connector line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

        {steps.map(({ icon: Icon, num, title, desc }, idx) => (
          <ScrollReveal key={num} variant={idx % 2 === 0 ? "fade-left" : "fade-right"} delay={idx * 150}>
            <div className={`relative flex items-center gap-4 md:gap-8 mb-10 md:mb-16 last:mb-0 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:flex-row`}>
              {/* Content card */}
              <div className={`flex-1 w-full ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="group glass-card p-5 md:p-6 hover-glass-glow transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className={`flex items-center gap-3 mb-2 md:mb-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-heading text-base md:text-lg font-bold uppercase">{title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>

              {/* Center node */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 bg-primary flex items-center justify-center border-4 border-background shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="font-heading text-xs md:text-sm font-black text-primary-foreground">{num}</span>
                <div className="absolute inset-0 border-2 border-primary animate-ping opacity-20" />
              </div>

              <div className="flex-1 hidden md:block" />

              {idx < steps.length - 1 && (
                <div className="md:hidden flex flex-col items-center my-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/30" />
                  <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-primary rotate-45 -mt-1" />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;