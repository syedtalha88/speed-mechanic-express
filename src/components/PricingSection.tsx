import { Check, Wrench, Star, Cog } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/919347732437?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20";

const plans = [
  {
    name: "Basic Service", price: "₹499",
    desc: "Essential maintenance for everyday riders. Includes free pickup and drop.",
    popular: false,
    features: ["40-Point Inspection", "Oil Top-Up", "Chain Lubrication", "Brake Adjustment", "Air Filter Cleaning", "Free Pickup & Drop", "Service Assurance Card"],
  },
  {
    name: "Pro Service", price: "₹999",
    desc: "Complete bike care by XpMechanics for peak performance.",
    popular: true,
    features: ["Everything in Basic", "Full Oil Change (Branded)", "Spark Plug Replacement", "Throttle Cable Adjustment", "Battery Health Check", "6-Month Warranty", "Service Assurance Card"],
  },
  {
    name: "Premium Overhaul", price: "₹2,499",
    desc: "For bikes that deserve the best — full overhaul by certified experts.",
    popular: false,
    features: ["Everything in Pro", "Engine Flush & Clean", "Carburetor Tuning", "Full Brake Overhaul", "Electrical Diagnostics", "12-Month Warranty", "Service Assurance Card"],
  },
];

const PricingSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Wrench className="h-4 w-4" /> XpMechanics Pricing
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            No Hidden <span className="text-primary">Charges</span>. Ever.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            What you see is what you pay. Upfront, honest pricing for every service.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <ScrollReveal key={plan.name} variant="fade-up" delay={idx * 120}>
            <div className={`relative overflow-hidden transition-all duration-500 h-full ${
              plan.popular
                ? "bg-foreground text-background border-2 border-primary hover-lift shadow-2xl"
                : "glass-card border border-border hover-glass-glow"
            } ${idx === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-base md:text-lg font-bold uppercase">{plan.name}</h3>
                <p className={`text-xs md:text-sm mt-1 mb-4 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>{plan.desc}</p>
                <div className="font-heading text-3xl md:text-4xl font-black text-primary mb-5 md:mb-6">
                  {plan.price}<span className={`text-xs md:text-sm font-body font-normal ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}> /service</span>
                </div>
                <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary shrink-0" />
                      <span className="text-xs md:text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a href={`${WA_LINK}${encodeURIComponent(plan.name)}`} target="_blank" rel="noopener noreferrer" className={`group w-full mechanical-btn font-heading font-bold uppercase py-3.5 md:py-4 text-sm transition-all duration-300 relative overflow-hidden flex items-center justify-center ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Now
                    <Cog className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
