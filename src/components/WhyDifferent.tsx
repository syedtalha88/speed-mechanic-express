import { Clock, Truck, IndianRupee, Wrench, ShieldCheck, Zap, FileCheck } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  { icon: Clock, title: "Quick Response", desc: "No waiting for days. Book a slot and our mechanic arrives at your doorstep on time. Same-day service available.", num: "01" },
  { icon: Truck, title: "Free Pickup & Drop", desc: "We pick up your bike, service it with genuine parts, and bring it back. You don't move an inch.", num: "02" },
  { icon: Zap, title: "We Save Your Time", desc: "No riding to workshops. No queues. No chasing mechanics. We come to you — doorstep bike service that respects your time.", num: "03" },
  { icon: FileCheck, title: "Service Assurance Card", desc: "Every service comes with a detailed Service Assurance Card — mechanic name, photo, parts used, work done, and warranty info. Complete transparency for your peace of mind.", num: "04" },
  { icon: IndianRupee, title: "Upfront Pricing", desc: "Know exactly what you'll pay before we start. No hidden charges, no surprise extras.", num: "05" },
  // { icon: ShieldCheck, title: "6-Month Warranty", desc: "Every service comes with a 6-month warranty on parts and labour. That's our confidence.", num: "06" },
  { icon: Wrench, title: "Experience Team", desc: "Only the top 5% of applicants make it through our mechanic selection and certification process.", num: "07" },
];

const WhyDifferent = () => (
  <section className="section-padding bg-foreground text-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-60 md:w-96 h-60 md:h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto relative">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Wrench className="h-4 w-4" /> The XpMechanics Difference
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Why Riders <span className="text-primary">Choose Us</span> Over Workshops
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            We re-engineered the entire bike service experience in Hyderabad. Here's why 12,000+ riders trust us.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {points.map(({ icon: Icon, title, desc, num }, idx) => (
          <ScrollReveal key={title} variant={idx < 3 ? "fade-up" : "scale"} delay={idx * 100}>
            {idx === 0 ? (
              <div className="group glass-frosted p-6 md:p-8 hover-glass-glow transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 font-heading text-5xl md:text-6xl font-black text-primary/10">{num}</div>
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]" />
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase mb-2 md:mb-3">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ) : idx === 1 ? (
              <div className="group bg-primary p-6 md:p-8 hover-lift transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 font-heading text-5xl md:text-6xl font-black text-primary-foreground/10">{num}</div>
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110" />
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase mb-2 md:mb-3 text-primary-foreground">{title}</h3>
                <p className="text-xs md:text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
              </div>
            ) : idx === 3 ? (
              /* Service Assurance Card - special highlight */
              <div className="group glass-frosted p-6 md:p-8 hover-glass-glow transition-all duration-500 relative overflow-hidden h-full border border-primary/30">
                <div className="absolute top-4 right-4 font-heading text-5xl md:text-6xl font-black text-primary/10">{num}</div>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]" />
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase mb-2 md:mb-3">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-3 flex items-center gap-2 text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" /> Extra Assurity Guaranteed
                </div>
              </div>
            ) : (
              <div className="group glass-frosted p-5 md:p-7 hover-glass-glow transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 font-heading text-4xl md:text-5xl font-black text-primary/10">{num}</div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 glass-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold uppercase">{title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferent;