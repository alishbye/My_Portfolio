import React, { useEffect, useRef } from "react";

const Background4 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing elements so they don't duplicate
    container.innerHTML = "";

    // Generate random stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Add star styling
      const size = Math.random() * 2 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      star.style.boxShadow = "0 0 2px rgba(255, 255, 255, 0.8)";

      container.appendChild(star);
    }
  }, []);

  // UFO Component with new structure

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div id="glow-background4" className="absolute inset-0" />
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

export default Background4;
