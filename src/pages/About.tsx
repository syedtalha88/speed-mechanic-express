import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Target, Eye, Users, Award, Shield } from "lucide-react";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
            About <span className="text-primary">MotoFix</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make bike service effortless for every rider in Hyderabad.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-black uppercase mb-4">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MotoFix started with a simple frustration — why should bike owners waste hours at workshops for a simple oil change? We believed there had to be a better way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in Hyderabad with 10+ years of automotive experience, we built a service that brings the workshop to your doorstep. Our certified mechanics arrive in 30 minutes, service your bike with genuine parts, and leave you with a perfectly running machine.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've serviced 25,000+ bikes and earned the trust of 12,000+ riders across 50+ areas in Hyderabad. And we're just getting started.
              </p>
            </div>
            <div className="bg-secondary p-8 border-l-4 border-primary">
              <div className="space-y-6">
                {[
                  { icon: Target, label: "Mission", text: "Make bike service effortless, transparent, and accessible to every rider." },
                  { icon: Eye, label: "Vision", text: "Be India's most trusted doorstep bike service brand." },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex gap-4">
                    <Icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="font-heading text-base font-bold uppercase text-primary">{label}</h3>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-black uppercase text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest pricing, genuine parts, no shortcuts." },
              { icon: Award, title: "Excellence", desc: "Only the best mechanics, tools, and techniques." },
              { icon: Users, title: "Customer First", desc: "Your convenience is our top priority, always." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 border border-border bg-card hover-lift">
                <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold uppercase mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;
