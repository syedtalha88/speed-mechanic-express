import { Check, Wrench, Star, Cog } from "lucide-react";

const plans = [
  {
    name: "Basic Service",
    price: "₹499",
    desc: "Essential maintenance for everyday riders. Includes free pickup and drop.",
    popular: false,
    features: [
      "40-Point Inspection",
      "Oil Top-Up",
      "Chain Lubrication",
      "Brake Adjustment",
      "Air Filter Cleaning",
      "Free Pickup & Drop",
    ],
  },
  {
    name: "Pro Service",
    price: "₹999",
    desc: "Complete bike care for peak performance. Mechanic at your doorstep in 30 min.",
    popular: true,
    features: [
      "Everything in Basic",
      "Full Oil Change (Branded)",
      "Spark Plug Replacement",
      "Throttle Cable Adjustment",
      "Battery Health Check",
      "6-Month Warranty",
    ],
  },
  {
    name: "Premium Overhaul",
    price: "₹2,499",
    desc: "For bikes that deserve the best doorstep service in Hyderabad.",
    popular: false,
    features: [
      "Everything in Pro",
      "Engine Flush & Clean",
      "Carburetor Tuning",
      "Full Brake Overhaul",
      "Electrical Diagnostics",
      "12-Month Warranty",
    ],
  },
];

const PricingSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> Transparent Pricing
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          No Hidden <span className="text-primary">Charges</span>. Ever.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          What you see is what you pay. Upfront pricing for doorstep bike service in Hyderabad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative overflow-hidden transition-all duration-500 ${
              plan.popular
                ? "bg-foreground text-background border-2 border-primary hover-lift shadow-2xl"
                : "glass-card border border-border hover-glass-glow"
            }`}
          >
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1">
                <Star className="h-3 w-3 fill-current" /> Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className={`font-heading text-lg font-bold uppercase ${plan.popular ? "" : ""}`}>{plan.name}</h3>
              <p className={`text-sm mt-1 mb-4 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>{plan.desc}</p>
              <div className="font-heading text-4xl font-black text-primary mb-6">
                {plan.price}<span className={`text-sm font-body font-normal ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}> /service</span>
              </div>
              <div className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <button
                className={`group w-full mechanical-btn font-heading font-bold uppercase py-4 transition-all duration-300 relative overflow-hidden ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Now
                  <Cog className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
