import { Wrench, Clock, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professional bike mechanic servicing motorcycle in workshop" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left - Content */}
      <div className="text-background">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
          <Wrench className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold uppercase tracking-wider text-primary">#1 Doorstep Bike Service</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
          Expert <span className="text-primary">Bike Service</span> at Your Doorstep in <span className="text-primary">Hyderabad</span>
        </h1>

        <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl leading-relaxed">
          Our certified mechanic reaches your location within <strong className="text-primary">30 minutes</strong>. Free pickup & drop. Zero hassle. Your bike, our responsibility.
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { icon: Clock, text: "30 Min Response" },
            { icon: Truck, text: "Free Pickup & Drop" },
            { icon: Wrench, text: "Expert Mechanics" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary text-primary-foreground font-heading font-bold uppercase text-base px-8 py-6 hover:bg-accent transition-all shadow-xl group">
            Book Service Now
            <ArrowRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="border-2 border-background/30 text-background font-heading font-bold uppercase text-base px-8 py-6 hover:bg-background/10 transition-all">
            View Pricing
          </Button>
        </div>
      </div>

      {/* Right - Booking Form */}
      <div className="glass-card p-8 max-w-md ml-auto w-full">
        <div className="mechanical-border pb-1 mb-6">
          <h3 className="font-heading text-xl font-black uppercase text-foreground">Book Your <span className="text-primary">Service</span></h3>
          <p className="text-sm text-muted-foreground mt-1">Get an instant quote. Takes 30 seconds.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
          <select className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Select Bike Brand</option>
            <option>Honda</option>
            <option>Yamaha</option>
            <option>Royal Enfield</option>
            <option>Bajaj</option>
            <option>TVS</option>
            <option>KTM</option>
            <option>Suzuki</option>
            <option>Hero</option>
            <option>Other</option>
          </select>
          <select className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Select Service</option>
            <option>General Service</option>
            <option>Oil Change</option>
            <option>Battery Replacement</option>
            <option>Brake Service</option>
            <option>Full Engine Overhaul</option>
            <option>Other</option>
          </select>
          <input type="text" placeholder="Your Location / Area" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
          <Button type="submit" className="w-full bg-primary text-primary-foreground font-heading font-bold uppercase text-base py-6 hover:bg-accent transition-all shadow-lg">
            Get Free Quote
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-3 text-center">No spam. We respect your privacy.</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
