import { Link } from "react-router-dom";
import Logo from "../assets/logo_xp_mechanics.png";

import { Wrench, Phone, Mail, MapPin } from "lucide-react";

const WA_LINK = "https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20a%20bike%20service";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="" width={100}/>
          </Link>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Hyderabad's most trusted doorstep bike service. Expert mechanics, same day service, zero hassle.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-primary">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Terms", to: "/terms" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-primary">Services</h4>
          <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
            <p>General Bike Service</p>
            <p>Oil Change</p>
            <p>Battery Replacement</p>
            <p>Brake Service</p>
            <p>Engine Diagnostics</p>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4 text-primary">Contact</h4>
          <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
            <a href="tel:+917095338092" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" /> +91 70953 38092
            </a>
            <a href="mailto:xpmechanics@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" /> xpmechanics@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" /> Hyderabad, Telangana, India
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-muted-foreground/20 mt-8 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p className="text-[10px] md:text-xs text-muted-foreground">© 2024 XpMechanics. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/terms" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link to="/terms" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;