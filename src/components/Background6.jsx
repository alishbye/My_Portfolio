import React, { useEffect, useRef } from "react";

const Background6 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars so they don't duplicate
    container.innerHTML = "";

    // generate random stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div id="glow-background6" className="absolute inset-0" />
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

export default Background6;
