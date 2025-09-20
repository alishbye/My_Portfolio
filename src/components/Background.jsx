
import React, { useEffect } from "react";


const Background = () => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");

    // generate random stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div id="glow-background" />
      <div id="stars-container" />
    </>
  );
};

export default Background;
