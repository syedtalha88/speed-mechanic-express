import { Phone, Wrench, Truck, CheckCircle, ArrowDown } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Book Online", desc: "Fill the form or call us. It takes 30 seconds." },
  { icon: Wrench, num: "02", title: "Mechanic Arrives", desc: "Our expert reaches your location within 30 minutes." },
  { icon: Truck, num: "03", title: "Free Pickup", desc: "We pick up your bike, service it, and drop it back." },
  { icon: CheckCircle, num: "04", title: "Done & Dusted", desc: "Ride your perfectly serviced bike. Zero hassle." },
];

const HowItWorks = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> Simple Process
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Getting your bike serviced has never been this easy. Four simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {steps.map(({ icon: Icon, num, title, desc }, idx) => (
          <div key={num} className="relative group">
            <div className="bg-card border border-border p-6 text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center relative">
                <Icon className="h-7 w-7 text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground font-heading text-xs font-black w-7 h-7 flex items-center justify-center">
                  {num}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 z-10">
                <ArrowDown className="h-6 w-6 text-primary rotate-[-90deg]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
