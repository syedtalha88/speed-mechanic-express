import { Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How fast can a mechanic reach my location?", a: "Our average response time is 30 minutes across all major areas in Hyderabad. We guarantee it — or your next service is free." },
  { q: "Is the pickup and drop service really free?", a: "Yes, 100% free. We pick up your bike from your location, service it at our workshop, and drop it back — at zero extra cost." },
  { q: "What brands do you service?", a: "We service all major brands — Honda, Yamaha, Royal Enfield, Bajaj, TVS, KTM, Suzuki, Hero, and more. Two-wheelers only." },
  { q: "Do you use genuine spare parts?", a: "Absolutely. We only use OEM and branded spare parts. No local alternatives. Every part comes with a warranty." },
  { q: "What if I'm not satisfied with the service?", a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll redo the service at no extra cost. No questions asked." },
  { q: "How do I pay?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), debit/credit cards, and net banking. You pay only after the service is complete." },
  { q: "Do you offer any warranty?", a: "Yes. Our Basic Service comes with a 3-month warranty, Pro Service with 6 months, and Premium Overhaul with 12 months." },
  { q: "Which areas in Hyderabad do you cover?", a: "We cover 50+ areas including Madhapur, Gachibowli, Kukatpally, Ameerpet, Secunderabad, Banjara Hills, Jubilee Hills, Kondapur, and many more." },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-3">
          <Wrench className="h-4 w-4" /> Got Questions?
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border px-6 data-[state=open]:border-primary transition-colors">
            <AccordionTrigger className="font-heading text-sm font-bold uppercase tracking-wide hover:no-underline hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
