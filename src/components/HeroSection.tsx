import { useState } from "react";
import { Wrench, Clock, Truck, ArrowRight, Cog, Shield } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/919347732437?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20a%20bike%20service";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", brand: "", service: "", location: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const subject = `New Lead: ${formData.service || "Bike Service"} - ${formData.name}`;
      const body = `Name: ${formData.name}%0APhone: ${formData.phone}%0ABike: ${formData.brand}%0AService: ${formData.service}%0ALocation: ${formData.location}`;
      window.open(`mailto:xpmechanics@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, "_self");
      
      const waMsg = `New Lead from Website:%0AName: ${formData.name}%0APhone: ${formData.phone}%0ABike: ${formData.brand}%0AService: ${formData.service}%0ALocation: ${formData.location}`;
      window.open(`https://wa.me/919347732437?text=${waMsg}`, "_blank");
      
      toast.success("Your request has been sent! We'll contact you within 5 minutes.");
      setFormData({ name: "", phone: "", brand: "", service: "", location: "" });
    } catch {
      toast.error("Something went wrong. Please call us at 93477 32437.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional bike mechanic servicing motorcycle at doorstep in Hyderabad" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40 md:to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-0">
        {/* Left - Content */}
        <div className="text-background">
          <ScrollReveal variant="fade-left" delay={100}>
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 md:px-5 md:py-2.5 mb-4 md:mb-6">
              <Wrench className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">#1 Doorstep Bike Service in Hyderabad</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="mechanical-slide" delay={200}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 md:mb-6">
              Expert <span className="text-primary">Bike Service</span> at Your Doorstep in <span className="text-primary">Hyderabad</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <p className="text-base md:text-xl text-background/80 mb-6 md:mb-8 max-w-xl leading-relaxed">
              Skip the workshop. Our certified mechanic reaches you in <strong className="text-primary">30 minutes</strong>. Free pickup & drop. We save your time — guaranteed.
            </p>
          </ScrollReveal>

          {/* 3 Key Highlights */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              { icon: Clock, text: "Mechanic in 30 Min" },
              { icon: Truck, text: "Free Pickup & Drop" },
              { icon: Shield, text: "Zero Hassle Service" },
            ].map(({ icon: Icon, text }, idx) => (
              <ScrollReveal key={text} variant="scale" delay={400 + idx * 100}>
                <div className="group glass-primary flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5 cursor-pointer hover-glass-glow transition-all duration-300">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 flex items-center justify-center border border-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                    <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-xs md:text-sm font-heading font-bold uppercase tracking-wider text-background">
                    {text}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group relative mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 hover:bg-accent transition-all duration-300 shadow-xl overflow-hidden inline-flex items-center justify-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Service Now
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <Cog className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:animate-spin" />
              </a>
              <a href="#services" className="mechanical-btn border-2 border-background/30 text-background font-heading font-bold uppercase text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 hover:bg-background/10 transition-all duration-300 group inline-flex items-center justify-center">
                <span className="flex items-center justify-center gap-2">
                  View Pricing
                  <Wrench className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-20deg]" />
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right - Booking Form */}
        <ScrollReveal variant="fade-right" delay={400}>
          <div className="glass-card p-6 md:p-8 max-w-md mx-auto lg:ml-auto w-full relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="mechanical-border pb-1 mb-5 md:mb-6">
                <h3 className="font-heading text-lg md:text-xl font-black uppercase text-foreground">Book Your <span className="text-primary">Service</span></h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Get a free quote in 30 seconds. No spam.</p>
              </div>

              <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-5 py-3 md:py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" required />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-5 py-3 md:py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" required />
                <select value={formData.brand} onChange={(e) => setFormData(p => ({ ...p, brand: e.target.value }))} className="w-full px-5 py-3 md:py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input appearance-none">
                  <option value="">Select Bike Brand</option>
                  <option>Honda</option><option>Yamaha</option><option>Royal Enfield</option>
                  <option>Bajaj</option><option>TVS</option><option>KTM</option>
                  <option>Suzuki</option><option>Hero</option><option>Other</option>
                </select>
                <select value={formData.service} onChange={(e) => setFormData(p => ({ ...p, service: e.target.value }))} className="w-full px-5 py-3 md:py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input appearance-none">
                  <option value="">Select Service</option>
                  <option>General Service</option><option>Oil Change</option>
                  <option>Battery Replacement</option><option>Brake Service</option>
                  <option>Full Engine Overhaul</option><option>Other</option>
                </select>
                <input type="text" placeholder="Your Location / Area in Hyderabad" value={formData.location} onChange={(e) => setFormData(p => ({ ...p, location: e.target.value }))} className="w-full px-5 py-3 md:py-3.5 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 mechanical-input" />
                <button type="submit" disabled={submitting} className="group w-full mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm md:text-base py-3.5 md:py-4 hover:bg-accent transition-all duration-300 shadow-lg relative overflow-hidden disabled:opacity-70">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? "Sending..." : "Get Free Quote"}
                    <Cog className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 group-hover:rotate-180" />
                  </span>
                </button>
              </form>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-3 text-center">✓ No spam · ✓ Instant response · ✓ 100% free</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;