import React, { useEffect, useRef, useMemo } from "react";

const Nebula = () => {
  const containerRef = useRef(null);

  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  const nebulaData = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      width: seededRandom(i + 1) * 30 + 20,
      height: seededRandom(i + 11) * 12 + 6,
      left: seededRandom(i + 21) * 90,
      top: seededRandom(i + 31) * 40 + 5,
      rotate: seededRandom(i + 41) * 60 - 30,
      blur: 8 + Math.floor(seededRandom(i + 61) * 12),
    }));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    nebulaData.forEach((d, idx) => {
      const neb = document.createElement("div");
      neb.style.position = "absolute";
      neb.style.width = `${d.width}%`;
      neb.style.height = `${d.height}%`;
      neb.style.left = `${d.left}%`;
      neb.style.top = `${d.top}%`;
      neb.style.transform = `rotate(${d.rotate}deg)`;
      neb.style.pointerEvents = "none";
      neb.style.mixBlendMode = "screen";
      neb.style.filter = `blur(${d.blur}px)`;
      const tintA = `rgba(120, 90, 200, ${0.35 + seededRandom(4000 + idx) * 0.25})`;
      const tintB = `rgba(255, 150, 220, ${0.18 + seededRandom(5000 + idx) * 0.22})`;
      const tintC = `rgba(90, 150, 255, ${0.14 + seededRandom(6000 + idx) * 0.18})`;
      neb.style.background = `
        radial-gradient(60% 60% at 55% 45%, ${tintA} 0%, rgba(0,0,0,0) 70%),
        radial-gradient(40% 40% at 30% 70%, ${tintB} 0%, rgba(0,0,0,0) 65%),
        radial-gradient(45% 45% at 70% 35%, ${tintC} 0%, rgba(0,0,0,0) 75%)
      `;
      container.appendChild(neb);
    });
  }, [nebulaData]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Nebula;
