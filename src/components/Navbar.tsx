import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Wrench className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[-20deg]" />
          <span className="font-heading text-xl font-black tracking-tight">
            MOTO<span className="text-primary">FIX</span>
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
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            +91-98765-43210
          </a>
          <Button className="bg-primary text-primary-foreground font-heading font-bold uppercase text-sm px-6 hover:bg-accent transition-colors shadow-lg">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
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
          <Button className="w-full mt-4 bg-primary text-primary-foreground font-heading font-bold uppercase">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
