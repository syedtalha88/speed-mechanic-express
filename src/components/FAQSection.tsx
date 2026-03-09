import { Wrench } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How fast can a mechanic reach my location in Hyderabad?", a: "Our average response time is 30 minutes across all major areas in Hyderabad. We guarantee it — or your next doorstep bike service is free." },
  { q: "Is the pickup and drop service really free?", a: "Yes, 100% free. We pick up your bike from your location, service it, and drop it back — at zero extra cost. Free pickup and drop is included with every service." },
  { q: "What bike brands do you service at doorstep?", a: "We service all major brands at your doorstep — Honda, Yamaha, Royal Enfield, Bajaj, TVS, KTM, Suzuki, Hero, and more. Two-wheelers only." },
  { q: "Do you use genuine spare parts?", a: "Absolutely. We only use OEM and branded spare parts for every bike service. No local alternatives. Every part comes with a warranty." },
  { q: "What if I'm not satisfied with the bike service?", a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll redo the service at no extra cost. No questions asked." },
  { q: "How do I pay for the doorstep bike service?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), debit/credit cards, and net banking. You pay only after the service is complete and you're satisfied." },
  { q: "Do you offer any warranty on bike service?", a: "Yes. Our Basic Service comes with a 3-month warranty, Pro Service with 6 months, and Premium Overhaul with 12 months on parts and labour." },
  { q: "Which areas in Hyderabad do you cover for doorstep bike service?", a: "We cover 50+ areas including Madhapur, Gachibowli, Kukatpally, Ameerpet, Secunderabad, Banjara Hills, Jubilee Hills, Kondapur, Miyapur, and many more." },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto max-w-3xl">
      <ScrollReveal variant="mechanical-slide">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Wrench className="h-4 w-4" /> Got Questions?
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Everything you need to know about our doorstep bike service in Hyderabad.
          </p>
        </div>
      </ScrollReveal>

      <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
            <AccordionItem value={`faq-${i}`} className="glass-card px-4 md:px-6 data-[state=open]:border-primary/30 transition-all duration-300 hover-glass-glow">
              <AccordionTrigger className="font-heading text-xs md:text-sm font-bold uppercase tracking-wide hover:no-underline hover:text-primary transition-colors duration-300 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
