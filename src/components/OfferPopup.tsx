import { useState, useEffect, useRef } from "react";
import { X, Cog, Wrench, Percent, Gift, Zap } from "lucide-react";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleClose = () => {
    setIsAnimatingClose(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsDismissed(true);
      setIsAnimatingClose(false);
    }, 500);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsDismissed(false);
  };

  return (
    <>
      {/* Floating offer button - shown when popup is closed/dismissed */}
      {!isOpen && (
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className={`fixed bottom-6 right-6 z-50 group ${
            isDismissed ? "animate-[offer-appear_0.5s_ease-out_forwards]" : "animate-[offer-pulse_2s_ease-in-out_infinite]"
          }`}
          aria-label="Special Offer"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 bg-primary animate-ping opacity-20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div
              className="relative w-16 h-16 bg-primary flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <Gift className="h-7 w-7 text-primary-foreground transition-transform duration-500 group-hover:rotate-12" />
            </div>
            {/* Badge */}
            <div className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-heading font-black uppercase px-2 py-0.5 animate-bounce">
              OFFER
            </div>
          </div>
        </button>
      )}

      {/* Popup Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${
            isAnimatingClose ? "animate-[popup-out_0.5s_ease-in_forwards]" : "animate-[popup-in_0.4s_ease-out_forwards]"
          }`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" onClick={handleClose} />

          {/* Popup */}
          <div
            ref={popupRef}
            className={`relative w-full max-w-md bg-background border-2 border-primary/30 shadow-2xl overflow-hidden ${
              isAnimatingClose ? "animate-[popup-shrink_0.5s_ease-in_forwards]" : "animate-[popup-scale_0.4s_ease-out_forwards]"
            }`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
          >
            {/* Mechanical background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Cog className="absolute -top-8 -right-8 h-32 w-32 text-primary/[0.04] animate-spin-slow" />
              <Cog className="absolute -bottom-6 -left-6 h-24 w-24 text-primary/[0.04] animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <Wrench className="absolute top-1/2 right-4 h-20 w-20 text-primary/[0.03] rotate-45" />
              {/* Diagonal lines */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 12px)' }} />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="bg-primary px-6 py-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/30"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <Percent className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-xs font-bold uppercase tracking-widest">Limited Time</p>
                  <h3 className="font-heading text-xl font-black text-primary-foreground uppercase">
                    20% OFF First Service
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6">
              <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Book now and save on your first doorstep bike service in Hyderabad
              </p>
              <p className="text-xs text-muted-foreground mb-5">
                Offer valid for new customers only. Free pickup & drop included.
              </p>

              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input"
                />
                <select className="w-full px-5 py-3 bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 mechanical-input appearance-none">
                  <option value="">Select Service</option>
                  <option>General Service</option>
                  <option>Oil Change</option>
                  <option>Battery Replacement</option>
                  <option>Brake Service</option>
                  <option>Engine Overhaul</option>
                </select>
                <button
                  type="submit"
                  className="group w-full mechanical-btn bg-primary text-primary-foreground font-heading font-bold uppercase text-sm py-3.5 hover:bg-accent transition-all duration-300 shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Claim 20% OFF Now
                    <Cog className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
                  </span>
                </button>
              </form>

              <p className="text-[10px] text-muted-foreground mt-3 text-center">
                ✓ No spam · ✓ Instant callback · ✓ 100% free consultation
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferPopup;
