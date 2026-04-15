"use client";

import { useEffect, useRef } from "react";

interface StarfieldProps {
  /** 0–1: intensifies drift and twinkle while the portal slider moves */
  slideProgress?: number;
}

const Starfield = ({ slideProgress = 0 }: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const slideRef = useRef(0);

  useEffect(() => {
    slideRef.current = slideProgress;
  }, [slideProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const nebulae: { x: number; y: number; radius: number; color: string; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Create nebula clouds
    for (let i = 0; i < 5; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        color: i % 2 === 0 ? "rgba(0,220,220," : "rgba(140,80,220,",
        speed: (Math.random() - 0.5) * 0.15,
      });
    }

    const draw = () => {
      const boost = 1 + slideRef.current * 2.8;
      const twinkleAmp = 0.2 + slideRef.current * 0.45;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((n) => {
        n.x += n.speed * boost;
        n.y += n.speed * 0.5 * boost;
        if (n.x > canvas.width + n.radius) n.x = -n.radius;
        if (n.x < -n.radius) n.x = canvas.width + n.radius;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        grad.addColorStop(0, n.color + "0.04)");
        grad.addColorStop(0.5, n.color + "0.02)");
        grad.addColorStop(1, n.color + "0)");
        ctx.fillStyle = grad;
        ctx.fillRect(n.x - n.radius, n.y - n.radius, n.radius * 2, n.radius * 2);
      });

      // Draw stars
      stars.forEach((s) => {
        s.y += s.speed * boost;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
        const flicker =
          s.opacity +
          Math.sin(Date.now() * (0.001 + slideRef.current * 0.002) + s.x) * twinkleAmp;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, flicker))})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: "linear-gradient(180deg, hsl(230 25% 4%) 0%, hsl(240 20% 8%) 50%, hsl(260 15% 6%) 100%)" }}
    />
  );
};

export default Starfield;
