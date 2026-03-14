import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Menu, X, Phone, Cog } from "lucide-react";

const WA_LINK = "https://wa.me/917095338092?text=Hi%20XpMechanics%2C%20I%20want%20to%20book%20a%20bike%20service";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Wrench className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[-20deg]" />
          <span className="font-heading text-xl font-black tracking-tight">
            XP<span className="text-primary">MECHANICS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-heading text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917095338092" className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            +91 70953 38092
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm px-7 py-2.5 hover:bg-accent transition-all duration-300 shadow-lg relative overflow-hidden inline-flex items-center">
            <span className="relative z-10 flex items-center gap-1.5">
              Book Now
              <Cog className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 font-heading text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary border-b border-border last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block w-full mt-4 mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase py-3 text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;