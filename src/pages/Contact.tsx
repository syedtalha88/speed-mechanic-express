import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a question? Need a quote? We're here to help. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-black uppercase mb-6">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91-98765-43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email", value: "hello@motofix.in", href: "mailto:hello@motofix.in" },
                  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
                  { icon: Clock, label: "Working Hours", value: "Mon-Sat: 7 AM - 9 PM | Sun: 8 AM - 6 PM" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 p-4 border border-border hover:border-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-heading text-sm font-bold uppercase text-primary">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 border-l-4 border-primary">
              <h2 className="font-heading text-2xl font-black uppercase mb-6">
                Send a <span className="text-primary">Message</span>
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors" />
                <select className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors">
                  <option value="">Subject</option>
                  <option>Book a Service</option>
                  <option>Get a Quote</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <Button type="submit" className="w-full bg-primary text-primary-foreground font-heading font-bold uppercase py-5 hover:bg-accent transition-all group">
                  Send Message <Send className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
