import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="bg-foreground text-background section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl prose-sm">
          {[
            { title: "1. Services", content: "MotoFix provides doorstep bike service, repair, and maintenance solutions in Hyderabad, Telangana. All services are performed by our certified mechanics using genuine parts." },
            { title: "2. Booking & Payments", content: "Services can be booked through our website or phone. Payment is due upon completion of service. We accept cash, UPI, debit/credit cards, and net banking. All prices listed are inclusive of labour charges unless stated otherwise." },
            { title: "3. Warranty", content: "Services come with a warranty period — 3 months for Basic, 6 months for Pro, and 12 months for Premium plans. Warranty covers parts and labour for defects arising from the service performed. Normal wear and tear is not covered." },
            { title: "4. Cancellation", content: "Bookings can be cancelled free of charge up to 2 hours before the scheduled appointment. Late cancellations may incur a ₹99 convenience fee. No-shows are charged the full booking amount." },
            { title: "5. Liability", content: "MotoFix is liable for damages caused directly by our mechanics during service. We are not liable for pre-existing conditions, wear-and-tear, or issues arising from user modifications. Maximum liability is limited to the service amount paid." },
            { title: "6. Privacy", content: "We collect your name, phone number, email, and location to provide our services. Your data is never shared with third parties for marketing purposes. We use industry-standard security measures to protect your information." },
            { title: "7. Disputes", content: "Any disputes arising from our services will be resolved through mutual consultation. If unresolved, disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana." },
            { title: "8. Changes", content: "MotoFix reserves the right to modify these terms at any time. Users will be notified of significant changes via email or website notification." },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="font-heading text-lg font-bold uppercase mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TermsPage;
