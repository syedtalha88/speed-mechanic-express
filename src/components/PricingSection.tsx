import { Check, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Service",
    price: "₹499",
    desc: "Essential maintenance for everyday riders.",
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
    desc: "Complete care for peak performance.",
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
    desc: "For bikes that deserve the best.",
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
          What you see is what you pay. Pick a plan that fits your bike's needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-card border-2 ${plan.popular ? "border-primary" : "border-border"} hover-lift overflow-hidden`}
          >
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-1.5 flex items-center justify-center gap-1">
                <Star className="h-3 w-3 fill-current" /> Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold uppercase">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
              <div className="font-heading text-4xl font-black text-primary mb-6">
                {plan.price}<span className="text-sm text-muted-foreground font-body font-normal"> /service</span>
              </div>
              <div className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Button
                className={`w-full font-heading font-bold uppercase ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-accent"
                    : "bg-foreground text-background hover:bg-foreground/90"
                } py-5 transition-all`}
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
