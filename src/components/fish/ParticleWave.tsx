import { useEffect, useRef } from "react";

/**
 * Coordinated particle wave — a school of fish reading as capital/data flow.
 * Pure canvas, token-derived colors, respects reduced motion.
 */
export function ParticleWave({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const COLORS = ["oklch(0.63 0.216 340)", "oklch(0.56 0.238 300)", "oklch(0.6 0.196 268)"];

    type P = { x: number; y: number; r: number; sp: number; ph: number; amp: number; c: string };
    let parts: P[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(240, Math.max(w < 640 ? 64 : 100, w / 6)));
      parts = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: h * (0.3 + Math.random() * 0.55),
        r: 0.6 + Math.random() * 1.7,
        sp: 0.18 + Math.random() * 0.55,
        ph: Math.random() * Math.PI * 2,
        amp: 12 + Math.random() * 46,
        c: COLORS[i % COLORS.length]!,
      }));
    };

    build();

    let t = 0;
    let running = true;
    let visible = true;
    const frame = () => {
      if (!running || !visible || w === 0 || h === 0) return;
      t += reduced ? 0 : 0.006;
      ctx.clearRect(0, 0, w, h);

      // flowing governance lines
      ctx.lineWidth = 1;
      for (let l = 0; l < 3; l++) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 10) {
          const y =
            h * (0.5 + l * 0.06) +
            Math.sin(x * 0.004 + t * 1.6 + l) * (26 + l * 10) +
            Math.sin(x * 0.001 - t) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const g = ctx.createLinearGradient(0, 0, w, 0);
        g.addColorStop(0, "oklch(0.56 0.238 300 / 0)");
        g.addColorStop(0.4, `oklch(0.56 0.238 300 / ${0.24 - l * 0.06})`);
        g.addColorStop(0.75, `oklch(0.6 0.196 268 / ${0.2 - l * 0.05})`);
        g.addColorStop(1, "oklch(0.63 0.216 340 / 0)");
        ctx.strokeStyle = g;
        ctx.stroke();
      }

      // school of particles
      for (const p of parts) {
        if (!reduced) {
          p.x += p.sp;
          if (p.x > w + 20) p.x = -20;
        }
        const y = p.y + Math.sin(p.x * 0.006 + t * 2 + p.ph) * (p.amp * 0.35);
        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.18 + 0.5 * (0.5 + 0.5 * Math.sin(p.x * 0.01 + t * 2));
        ctx.arc(p.x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
        if (visible && !reduced) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(canvas);
    frame();

    const onResize = () => {
      build();
      if (visible) frame();
    };
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
