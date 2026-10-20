import { useEffect, useRef } from "react";

const symbols = [
  "∑",
  "√",
  "π",
  "∞",
  "Δ",
  "∫",
  "f(x)",
  "x²",
  "≈",
  "dy/dx",
];

const colors = [
  "#38bdf8",
  "#a78bfa",
  "#34d399",
  "#fbbf24",
  "#60a5fa",
];

function MathCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();

      const dx = event.clientX - mouse.current.lastX;
      const dy = event.clientY - mouse.current.lastY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const timeDifference = now - mouse.current.lastTime;

      if (timeDifference < 50 || distance < 20) {
        return;
      }

      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
      mouse.current.lastX = event.clientX;
      mouse.current.lastY = event.clientY;
      mouse.current.lastTime = now;

      // Faster movement = slightly larger particle
      const speed = Math.min(distance / 30, 2);

      createParticle(
        container,
        event.clientX,
        event.clientY,
        speed,
        dx,
        dy
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    />
  );
}

function createParticle(
  container: HTMLDivElement,
  x: number,
  y: number,
  speed: number,
  dx: number,
  dy: number
) {
  const particle = document.createElement("span");

  const symbol =
    symbols[Math.floor(Math.random() * symbols.length)];

  const color =
    colors[Math.floor(Math.random() * colors.length)];

  const size = 14 + Math.random() * 14 + speed * 4;

  // Direction based on cursor movement + randomness
  const moveX = -dx * 0.5 + (Math.random() - 0.5) * 70;
  const moveY = -dy * 0.5 + (Math.random() - 0.5) * 70;

  particle.className = "math-particle";

  particle.textContent = symbol;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  particle.style.color = color;
  particle.style.fontSize = `${size}px`;

  particle.style.setProperty(
    "--move-x",
    `${moveX}px`
  );

  particle.style.setProperty(
    "--move-y",
    `${moveY}px`
  );

  particle.style.setProperty(
    "--rotation",
    `${(Math.random() - 0.5) * 60}deg`
  );

  container.appendChild(particle);

  // Small chance of creating a geometric companion
  if (Math.random() > 0.7) {
    createShape(
      container,
      x,
      y,
      color,
      moveX,
      moveY
    );
  }

  setTimeout(() => {
    particle.remove();
  }, 1100);
}

function createShape(
  container: HTMLDivElement,
  x: number,
  y: number,
  color: string,
  moveX: number,
  moveY: number
) {
  const shape = document.createElement("span");

  shape.className = "math-shape";

  shape.style.left = `${x}px`;
  shape.style.top = `${y}px`;

  shape.style.backgroundColor = color;

  shape.style.setProperty(
    "--move-x",
    `${moveX * 0.7}px`
  );

  shape.style.setProperty(
    "--move-y",
    `${moveY * 0.7}px`
  );

  shape.style.setProperty(
    "--rotation",
    `${Math.random() * 180}deg`
  );

  container.appendChild(shape);

  setTimeout(() => {
    shape.remove();
  }, 900);
}

export default MathCursor;