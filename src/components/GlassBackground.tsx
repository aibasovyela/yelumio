import { useEffect, useRef } from "react";

/**
 * Full-page fixed background with bright abstract yellow orbs
 * that smoothly translate on scroll (parallax).
 */
export const GlassBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const y = window.scrollY;
      const children = containerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const el = children[i] as HTMLElement;
        const speed = parseFloat(el.dataset.speed || "0.05");
        const direction = i % 2 === 0 ? 1 : -1;
        const translateY = y * speed * direction;
        const translateX = y * speed * 0.3 * (i % 3 === 0 ? 1 : -1);
        el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" ref={containerRef}>
      {/* Large bright orb — top right */}
      <div
        data-speed="0.03"
        className="absolute -top-10 -right-10 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 50% / 0.5) 0%, hsl(48 100% 50% / 0.15) 40%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Medium orb — left center */}
      <div
        data-speed="0.06"
        className="absolute top-[25%] -left-20 w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(42 95% 50% / 0.45) 0%, hsl(48 100% 50% / 0.1) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Bright orb — center right */}
      <div
        data-speed="0.08"
        className="absolute top-[50%] right-[15%] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 55% / 0.4) 0%, hsl(45 100% 50% / 0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Accent orb — bottom right */}
      <div
        data-speed="0.1"
        className="absolute top-[70%] right-[5%] w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50% / 0.5) 0%, hsl(48 100% 50% / 0.1) 45%, transparent 65%)",
          filter: "blur(45px)",
        }}
      />

      {/* Bottom left orb */}
      <div
        data-speed="0.04"
        className="absolute top-[85%] -left-10 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(48 90% 55% / 0.4) 0%, hsl(48 100% 50% / 0.08) 50%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Elongated shape — top left */}
      <div
        data-speed="0.07"
        className="absolute top-[8%] left-[15%] w-[250px] h-[500px] rounded-[50%] rotate-[35deg]"
        style={{
          background: "radial-gradient(ellipse, hsl(48 100% 50% / 0.35) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* Small intense orb — mid-left */}
      <div
        data-speed="0.09"
        className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(48 100% 50% / 0.55) 0%, transparent 60%)",
          filter: "blur(35px)",
        }}
      />

      {/* Diffuse glow — bottom center */}
      <div
        data-speed="0.05"
        className="absolute top-[60%] left-[40%] w-[600px] h-[300px] rounded-[50%]"
        style={{
          background: "radial-gradient(ellipse, hsl(48 100% 50% / 0.2) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};
