import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Wrench, Target, Eye, Users, Award, Shield, Clock, Truck, FileCheck, Cog } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20want%20to%20know%20more%20about%20your%20services";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-background section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--background)) 0, hsl(var(--background)) 1px, transparent 0, transparent 12px)' }} />
        <Cog className="absolute -top-20 -right-20 h-60 w-60 text-background/[0.03] animate-spin-slow" />
        <div className="container mx-auto text-center relative">
          <ScrollReveal variant="mechanical-slide">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <Wrench className="h-4 w-4" /> Who We Are
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4">
              About <span className="text-primary">XpMechanics</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make doorstep bike service effortless for every rider in Hyderabad. No workshops. No queues. Just precision at your doorstep.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal variant="fade-left">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-black uppercase mb-4">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  XpMechanics started with a simple frustration — why should bike owners waste hours at workshops for a simple oil change? We believed there had to be a better way.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Founded in Hyderabad with 10+ years of automotive experience, we built a doorstep bike service that brings the workshop to you. Our certified mechanics , service your bike with genuine parts, and leave you with a perfectly running machine.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  Today, we've serviced 25,000+ bikes and earned the trust of 12,000+ riders across 50+ areas in Hyderabad with free pickup and drop. And we're just getting started.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm px-8 py-3.5 hover:bg-accent transition-all duration-300 shadow-lg inline-flex items-center gap-2">
                  Talk to Us
                  <Wrench className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-20deg]" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-right">
              <div className="glass-card p-6 md:p-8 border-l-4 border-primary relative overflow-hidden">
                <Cog className="absolute -bottom-6 -right-6 h-24 w-24 text-primary/[0.05] animate-spin-slow" />
                <div className="space-y-6 relative">
                  {[
                    { icon: Target, label: "Mission", text: "Make doorstep bike service effortless, transparent, and accessible to every rider in Hyderabad." },
                    { icon: Eye, label: "Vision", text: "Be India's most trusted doorstep bike service brand — starting with Hyderabad." },
                  ].map(({ icon: Icon, label, text }) => (
                    <div key={label} className="flex gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold uppercase text-primary">{label}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal variant="mechanical-slide">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-black uppercase">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Quick Response", desc: "Same-day service at your doorstep. No delays, no excuses." },
              { icon: Truck, title: "Free Pickup & Drop", desc: "We pick up your bike and bring it back — completely free." },
              { icon: FileCheck, title: "Service Assurance Card", desc: "Detailed card with mechanic info, parts used, work done & warranty for total transparency." },
              { icon: Shield, title: "Genuine Parts Only", desc: "OEM and branded spare parts with warranty. No shortcuts, ever." },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} variant="fade-up" delay={idx * 100}>
                <div className="group glass-card p-5 md:p-6 hover-glass-glow transition-all duration-500 h-full text-center">
                  <div className="w-14 h-14 mx-auto bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal variant="mechanical-slide">
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase text-center mb-10 md:mb-12">
              Our <span className="text-primary">Values</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest pricing, genuine parts, no shortcuts. What you see is what you pay." },
              { icon: Award, title: "Excellence", desc: "Only the best mechanics, tools, and techniques. Top 5% of applicants make the cut." },
              { icon: Users, title: "Customer First", desc: "Your convenience is our top priority. Free pickup & drop, doorstep service, zero hassle." },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} variant="scale" delay={idx * 100}>
                <div className="group text-center p-6 md:p-8 border border-border bg-card hover-glass-glow transition-all duration-500">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]" />
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase mb-2">{title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default AboutPage;