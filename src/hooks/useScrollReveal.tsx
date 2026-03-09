import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// Wrapper component for easy use
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "clip-reveal" | "mechanical-slide";
  delay?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<RevealProps> = ({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  once = true,
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once });

  const baseStyles: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const variantStyles: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
    "fade-up": {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-left": {
      hidden: { opacity: 0, transform: "translateX(-40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-right": {
      hidden: { opacity: 0, transform: "translateX(40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    scale: {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "clip-reveal": {
      hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
      visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    },
    "mechanical-slide": {
      hidden: { opacity: 0, transform: "translateY(30px) skewY(2deg)" },
      visible: { opacity: 1, transform: "translateY(0) skewY(0deg)" },
    },
  };

  const v = variantStyles[variant] || variantStyles["fade-up"];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        transitionProperty: "opacity, transform, clip-path",
        ...(isVisible ? v.visible : v.hidden),
      }}
    >
      {children}
    </div>
  );
};
