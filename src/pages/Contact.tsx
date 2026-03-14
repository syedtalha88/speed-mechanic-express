import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, Send, Cog, Wrench, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import { submitForm } from "@/lib/submitForm";

const WA_LINK = "https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20have%20a%20question";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await submitForm(
        { name: formData.name, email: formData.email, phone: formData.phone, subject: formData.subject, message: formData.message },
        "Contact Form"
      );
      toast.success("Message sent! We'll get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please call us at 93477 32437.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground text-background section-padding relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--background)) 0, hsl(var(--background)) 1px, transparent 0, transparent 12px)' }} />
          <Cog className="absolute -bottom-20 -left-20 h-60 w-60 text-background/[0.03] animate-spin-slow" />
          <div className="container mx-auto text-center relative">
            <ScrollReveal variant="mechanical-slide">
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
                <Wrench className="h-4 w-4" /> Reach Out
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4">
                Contact <span className="text-primary">XpMechanics</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Got a question? Need a quote for doorstep bike service? We respond within 5 minutes — guaranteed.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div>
                <ScrollReveal variant="fade-left">
                  <h2 className="font-heading text-xl md:text-2xl font-black uppercase mb-6">
                    Get In <span className="text-primary">Touch</span>
                  </h2>
                </ScrollReveal>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+91-93477-32437", href: "tel:+919347732437" },
                    { icon: Mail, label: "Email", value: "xpmechanics@gmail.com", href: "mailto:xpmechanics@gmail.com" },
                    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
                    { icon: Clock, label: "Working Hours", value: "Mon-Sat: 7 AM - 9 PM | Sun: 8 AM - 6 PM" },
                  ].map(({ icon: Icon, label, value, href }, idx) => (
                    <ScrollReveal key={label} variant="fade-up" delay={idx * 80}>
                      <div className="group flex gap-4 p-4 glass-card hover-glass-glow transition-all duration-300">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                          <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-heading text-xs md:text-sm font-bold uppercase text-primary">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                          ) : (
                            <p className="text-sm text-foreground">{value}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal variant="fade-up" delay={400}>
                  <div className="mt-6">
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group mechanical-btn bg-[#25D366] text-white font-heading font-bold uppercase text-sm px-8 py-3.5 hover:bg-[#1da851] transition-all duration-300 shadow-lg inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <ScrollReveal variant="fade-right">
                <div className="glass-card p-6 md:p-8 border-l-4 border-primary relative overflow-hidden">
                  <Cog className="absolute -bottom-8 -right-8 h-28 w-28 text-primary/[0.04] animate-spin-slow" />
                  <div className="relative">
                    <h2 className="font-heading text-xl md:text-2xl font-black uppercase mb-6">
                      Send a <span className="text-primary">Message</span>
                    </h2>
                    <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                      <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-5 py-3 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input" required />
                      <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-5 py-3 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input" />
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-5 py-3 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input" required />
                      <select value={formData.subject} onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))} className="w-full px-5 py-3 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input appearance-none">
                        <option value="">Subject</option>
                        <option>Book a Service</option>
                        <option>Get a Quote</option>
                        <option>Feedback</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                      <textarea rows={4} placeholder="Your Message" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-5 py-3 bg-background/80 border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input resize-none" />
                      <button type="submit" disabled={submitting} className="group w-full mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm md:text-base py-3.5 md:py-4 hover:bg-accent transition-all duration-300 shadow-lg relative overflow-hidden disabled:opacity-70">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {submitting ? "Sending..." : "Send Message"}
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;