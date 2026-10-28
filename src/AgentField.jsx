import { useEffect, useRef } from 'react';

// Decorative hero background: a handful of agents that steer toward a
// wandering goal and leave short trails, a nod to RL "chase the dot" envs.
export default function AgentField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const goal = { x: width * 0.7, y: height * 0.5 };
    const agents = Array.from({ length: 7 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      speed: 1.2 + Math.random() * 1.4,
      trail: [],
    }));

    const snap = (v) => Math.round(v / 4) * 4;
    const accent =getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

    const step = () => {
      frame += 1;
      const t = frame / 220;
      goal.x = width * (0.55 + 0.3 * Math.sin(t * 1.3));
      goal.y = height * (0.5 + 0.32 * Math.sin(t * 2.1 + 1));

      ctx.clearRect(0, 0, width, height);

      for (const a of agents) {
        const dx = goal.x - a.x;
        const dy = goal.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        a.vx += ((dx / dist) * a.speed - a.vx) * 0.04 + (Math.random() - 0.5) * 0.3;
        a.vy += ((dy / dist) * a.speed - a.vy) * 0.04 + (Math.random() - 0.5) * 0.3;
        a.x += a.vx;
        a.y += a.vy;
        a.trail.push([a.x, a.y]);
        if (a.trail.length > 40) a.trail.shift();
        if (dist < 10) {
          a.x = Math.random() * width;
          a.y = Math.random() < 0.5 ? -10 : height + 10;
          a.trail = [];
        }

        // Snap to a coarse grid so everything reads as chunky pixels.
        ctx.fillStyle = accent;
        a.trail.forEach(([x, y], i) => {
          if (i % 4) return;
          ctx.globalAlpha = (i / a.trail.length) * 0.4;
          ctx.fillRect(snap(x), snap(y), 3, 3);
        });
        ctx.globalAlpha = 0.95;
        ctx.fillRect(snap(a.x) - 1, snap(a.y) - 1, 6, 6);
      }

      const blinkOn = Math.floor(frame / 30) % 2 === 0;
      ctx.globalAlpha = blinkOn ? 1 : 0.4;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(snap(goal.x) - 8, snap(goal.y) - 8, 16, 16);

      if (!reduceMotion) raf = requestAnimationFrame(step);
    };

    if (reduceMotion) {
      for (let i = 0; i < 120; i++) step();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="agent-field" aria-hidden="true" />;
}
