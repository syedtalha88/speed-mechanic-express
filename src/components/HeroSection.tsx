import { Wrench, Clock, Truck, ArrowRight, Cog, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professional bike mechanic servicing motorcycle at doorstep in Hyderabad" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left - Content */}
      <div className="text-background">
        <div className="inline-flex items-center gap-2 glass-dark px-5 py-2.5 mb-6">
          <Wrench className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold uppercase tracking-wider text-primary">#1 Doorstep Bike Service in Hyderabad</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
          Expert <span className="text-primary">Bike Service</span> at Your Doorstep in <span className="text-primary">Hyderabad</span>
        </h1>

        <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl leading-relaxed">
          Skip the workshop. Our certified mechanic reaches you in <strong className="text-primary">30 minutes</strong>. Free pickup & drop. We save your time — guaranteed.
        </p>

        {/* 3 Key Highlights - Glass Pill Cards */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { icon: Clock, text: "Mechanic in 30 Min", highlight: true },
            { icon: Truck, text: "Free Pickup & Drop", highlight: true },
            { icon: Shield, text: "Zero Hassle Service", highlight: true },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group glass-primary flex items-center gap-3 px-5 py-3.5 cursor-pointer hover-glass-glow transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/20 flex items-center justify-center border border-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="text-sm font-heading font-bold uppercase tracking-wider text-background">
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="group relative mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-base px-10 py-4 hover:bg-accent transition-all duration-300 shadow-xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Book Service Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <Cog className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:animate-spin" />
          </button>
          <button className="mechanical-btn border-2 border-background/30 text-background font-heading font-bold uppercase text-base px-10 py-4 hover:bg-background/10 transition-all duration-300 group">
            <span className="flex items-center gap-2">
              View Pricing
              <Wrench className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-20deg]" />
            </span>
          </button>
        </div>
      </div>

      {/* Right - Booking Form with Glass */}
      <div className="glass-card p-8 max-w-md ml-auto w-full relative overflow-hidden">
        {/* Decorative glass shine */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="mechanical-border pb-1 mb-6">
            <h3 className="font-heading text-xl font-black uppercase text-foreground">Book Your <span className="text-primary">Service</span></h3>
            <p className="text-sm text-muted-foreground mt-1">Get a free quote in 30 seconds. No spam.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input type="text" placeholder="Your Name" className="w-full px-5 py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" />
            </div>
            <div className="relative">
              <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" />
            </div>
            <div className="relative">
              <select className="w-full px-5 py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input appearance-none">
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
            </div>
            <div className="relative">
              <select className="w-full px-5 py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input appearance-none">
                <option value="">Select Service</option>
                <option>General Service</option>
                <option>Oil Change</option>
                <option>Battery Replacement</option>
                <option>Brake Service</option>
                <option>Full Engine Overhaul</option>
                <option>Other</option>
              </select>
            </div>
            <div className="relative">
              <input type="text" placeholder="Your Location / Area in Hyderabad" className="w-full px-5 py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" />
            </div>
            <button
              type="submit"
              className="group w-full mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-base py-4 hover:bg-accent transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Quote
                <Cog className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              </span>
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3 text-center">✓ No spam · ✓ Instant response · ✓ 100% free</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
