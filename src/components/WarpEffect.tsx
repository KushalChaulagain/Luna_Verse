"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const WarpEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const lines: { angle: number; speed: number; length: number; opacity: number }[] = [];

    for (let i = 0; i < 150; i++) {
      lines.push({
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 8 + 4,
        length: Math.random() * 100 + 50,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    let frame = 0;
    const maxFrames = 60;
    let animId: number;

    const draw = () => {
      frame++;
      ctx.fillStyle = `rgba(10,10,20,${frame < 10 ? 0.3 : 0.15})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const progress = frame / maxFrames;

      lines.forEach((l) => {
        const dist = l.speed * frame * (1 + progress * 3);
        const x1 = cx + Math.cos(l.angle) * dist;
        const y1 = cy + Math.sin(l.angle) * dist;
        const x2 = cx + Math.cos(l.angle) * (dist + l.length * (1 + progress * 2));
        const y2 = cy + Math.sin(l.angle) * (dist + l.length * (1 + progress * 2));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0,220,220,${l.opacity * (1 - progress * 0.5)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      if (frame < maxFrames) {
        animId = requestAnimationFrame(draw);
      }
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default WarpEffect;
