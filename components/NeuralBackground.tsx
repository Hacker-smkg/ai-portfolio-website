"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let frame = 0;
    let animationId = 0;
    let points: NodePoint[] = [];

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      const count = Math.min(72, Math.max(34, Math.floor(window.innerWidth / 26)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
      }));
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const grid = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      grid.addColorStop(0, "rgba(34, 211, 238, 0.1)");
      grid.addColorStop(0.45, "rgba(139, 92, 246, 0.08)");
      grid.addColorStop(1, "rgba(16, 185, 129, 0.08)");
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;

      for (let x = 0; x < window.innerWidth; x += 92) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      for (let y = 0; y < window.innerHeight; y += 92) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }

      points.forEach((point) => {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
        }

        if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
        if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;

        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        const radius = pointerDistance < 180 ? 2.9 : 1.7;

        ctx.beginPath();
        ctx.fillStyle = pointerDistance < 180 ? "rgba(34, 211, 238, 0.72)" : "rgba(148, 163, 184, 0.46)";
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.13 - distance / 1400})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) {
        const scanY = (frame * 0.45) % window.innerHeight;
        const scan = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80);
        scan.addColorStop(0, "rgba(34, 211, 238, 0)");
        scan.addColorStop(0.5, "rgba(34, 211, 238, 0.08)");
        scan.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = scan;
        ctx.fillRect(0, scanY - 80, window.innerWidth, 160);
      }

      animationId = window.requestAnimationFrame(draw);
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070d]">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-75" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.1),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.1),transparent_36%)]" />
      <div className="absolute inset-0 scanline-overlay opacity-35" />
    </div>
  );
}
