import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Robot from "./Robot";
import Background2 from "./Background2";
import Background3 from "./Background3";
import Background from "./Background";
import Background4 from "./Background4";
import Nebula from "./Nebula";
import Background5 from "./Background5";
import Background6 from "./Background6";
import Footer from "../Footer";
import { ReverseSubtractEquation } from "three";



const Section1 = () => {
  const containerRef = useRef(null);

  // ✅ Initialize Lenis once
useEffect(() => {
  const lenis = new Lenis({
    duration: window.innerWidth < 768 ? 0.7 : 1.2, // Shorter duration on mobile
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother easing
    smoothWheel: true,
    smoothTouch: true,
    touchMultiplier: window.innerWidth < 768 ? 1.3 : 1.2, // Reduced inertia
    wheelMultiplier: window.innerWidth < 768 ? 0.7 : 1,
    gestureOrientation: 'vertical',
    touchInertiaMultiplier: window.innerWidth < 768 ? 1.5 : 2.5, // Reduced for upward scroll
    syncTouch: true, // Better touch sync
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);


  // 👇 scroll progress only for sections 1–6
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xRobotRaw = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["0%", "5%", "5%", "5%"]);
  const yRobotRaw = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["0%", "20%", "20%", "20%"]);
  const scaleRobotRaw = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0.95, 0.95, 0.95]);
  const robotOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [1, 1, 1, 1]);

  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };

  const xRobot = useSpring(xRobotRaw, springConfig);
  const yRobot = useSpring(yRobotRaw, springConfig);
  const scaleRobot = useSpring(scaleRobotRaw, springConfig);
  const robotOpacity = useSpring(robotOpacityRaw, springConfig);

  // Control visibility of skills
  const skillsOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.47, 0.57], [0, 1, 1, 0]);

  return (
    <>
      {/* Robot Canvas */}
      <motion.div
        className="hidden md:block fixed inset-0 w-full h-full overflow-visible z-[100]"
        style={{
          opacity: robotOpacity,
          scale: scaleRobot,
          x: xRobot,
          y: yRobot,
        }}
      >
        <Canvas camera={{ position: [0, 1, 2], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <OrbitControls enabled={false} enablePan={false} />
          <Suspense fallback={null}>
            <Robot scrollProgress={scrollYProgress} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </motion.div>

      {/* Main content */}
      <div ref={containerRef} className="relative">
        {/* First section */}
       <section id="Home" className="flex items-start px-4 md:px-12 relative overflow-hidden min-h-screen">
  <Background />
  <div className="w-full pt-10 md:pt-20 flex items-start justify-between relative z-20">
    <div className="text-center w-full md:w-1/2 pt-10 md:pt-30 pr-0 md:pr-20">
      {/* Phone Image - Only visible on mobile */}
   <div className="block md:hidden mb-3 justify-center">
  <motion.img 
    src="phonebg.png" 
    alt="Alishba" 
    className="max-w-xs mx-auto"
    animate={{
      y: [0, -15, 0] // Move up 10px and back down
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</div>
      
      <div className="scale-fade">
        <h1 className="text-white font-sans font-bold text-4xl md:text-7xl leading-tight">
          HI, I'M ALISHBA.
        </h1>
      </div>
      <motion.h2 
  className="text-white text-xl md:text-4xl mt-1 font-normal overflow-hidden whitespace-nowrap border-r-2 border-white"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ 
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  }}
  onAnimationComplete={() => {
    // Remove the cursor after typing is done
    document.querySelector('h2').style.borderRight = 'none';
  }}
>
  A Front-End Web Developer
</motion.h2>
      <h3 className="text-white text-base md:text-xl mt-2 font-normal px-4 md:px-0">
        My work bridges creativity and functionality to make the web more beautiful.
      </h3>
    </div>
  </div>
</section>

        {/* Fixed heading for skills */}
        <motion.div
          className=" hidden md:block fixed top-40 left-1/2 -translate-x-1/2 z-20"
          style={{
            opacity: skillsOpacity,
            scale: useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0.5, 1, 1]),
          }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-20">
            My Work Skills
          </h2>
       {/* ... skill cards ... */}
{/* ... skill cards ... */}
{/* Left side skills */}
<div className="absolute w-60 -left-50 top-[16rem] transform -translate-y-1/2">
  <motion.div
    className="bg-white backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40"
    style={{
      opacity: useTransform(scrollYProgress, [0.1, 0.2, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.15, 1], [0, -10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.15, 0.3], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">React</span>
  </motion.div>

  <motion.div
    className="bg-white backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40 mt-6"
    style={{
      opacity: useTransform(scrollYProgress, [0.1, 0.2, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.2, 1], [0, 10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.2, 0.35], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">JavaScript</span>
  </motion.div>

  {/* New Skill - Next.js (appears sooner) */}
  <motion.div
    className="bg-white backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40 mt-6"
    style={{
      opacity: useTransform(scrollYProgress, [0.12, 0.22, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.18, 1], [0, -10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.18, 0.33], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">Next.js</span>
  </motion.div>
</div>

{/* Right side skills */}
<div className="absolute w-60 -right-50 top-[16rem] transform -translate-y-1/2">
  <motion.div
    className="bg-white backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40"
    style={{
      opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.15, 1], [0, -10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.15, 0.3], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">Tailwind</span>
  </motion.div>

  <motion.div
    className="bg-white backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40 mt-6"
    style={{
      opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.2, 1], [0, 10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.2, 0.35], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">HTML</span>
  </motion.div>

  {/* New Skill - Three.js (appears sooner) */}
  <motion.div
    className="bg-white  border border-black rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40 mt-6"
    style={{
      opacity: useTransform(scrollYProgress, [0.18, 0.28, 0.8], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.22, 1], [0, 10], { clamp: false }),
      scale: useTransform(scrollYProgress, [0.22, 0.37], [0.5, 1]),
    }}
  >
    <span className="text-black text-2xl font-semibold">Three.js</span>
  </motion.div>
</div>
</motion.div>

{/* Mobile-only huge zoom heading */}
<motion.div
  className="block md:hidden fixed top-1/2 left-1/2 z-30 pointer-events-none items-center justify-center"
  style={{
    // Center correctly
    x: "-50%",
    y: "-50%",
    transformOrigin: "center center",

    // ⚡ Zoom very quickly to fill the screen, then keep going
    scale: useTransform(
      scrollYProgress,
      [0.08, 0.25, 0.4], // start earlier, finish quicker
      [0.2, 8, 15],      // start small → huge zoom
      { clamp: true }
    ),

    // ⚡ Pop in bright white, then fade out smoothly
    opacity: useTransform(
      scrollYProgress,
      [0.07, 0.09, 0.25, 0.35],
      [0, 1, 1, 0],
      { clamp: true }
    ),

    willChange: "transform, opacity",
  }}
>
  <h2 className="text-white font-extrabold text-3xl leading-none text-center">
    My Work Skills
  </h2>
</motion.div>

{/* Skills Cards - Appear after heading disappears one by one */}
<div id="skills" className="block md:hidden">
  {/* Tailwind - First from left */}
  <motion.div
    className="fixed left-1/2 top-1/4 z-30 -translate-x-1/2 "
    style={{
      opacity: useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]),
      x: useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [-100, 0, 0, -100]),
    }}
  >
    <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-8 py-4 shadow-2xl shadow-black/40">
      <span className="text-black text-xl font-semibold">Tailwind</span>
    </div>
  </motion.div>

  {/* HTML - Second from right */}
  <motion.div
  className="fixed left-1/2 top-1/4 z-30 mt-16 -translate-x-1/2"
  style={{
    opacity: useTransform(scrollYProgress, [0.38, 0.43, 0.55, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.38, 0.43, 0.55, 0.6], [100, 0, 0, 100]),
  }}
>
  <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40">
    <span className="text-black text-xl font-semibold">HTML</span>
  </div>
</motion.div>

  {/* React - Third from left */}
 <motion.div
  className="fixed left-1/2 top-1/4 z-30 mt-32 -translate-x-1/2"
  style={{
    opacity: useTransform(scrollYProgress, [0.41, 0.46, 0.55, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.41, 0.46, 0.55, 0.6], [-100, 0, 0, -100]),
  }}
>
  <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40">
    <span className="text-black text-xl font-semibold">React</span>
  </div>
</motion.div>

  {/* JavaScript - Fourth from right */}
<motion.div
  className="fixed left-1/2 top-1/4 z-30 mt-48 -translate-x-1/2"
  style={{
    opacity: useTransform(scrollYProgress, [0.44, 0.49, 0.55, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.44, 0.49, 0.55, 0.6], [100, 0, 0, 100]),
  }}
>
  <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40">
    <span className="text-black text-xl font-semibold">JavaScript</span>
  </div>
</motion.div>

  {/* Next.js - Fifth from left */}
  <motion.div
  className="fixed left-1/2 top-1/4 z-30 mt-64 -translate-x-1/2"
  style={{
    opacity: useTransform(scrollYProgress, [0.47, 0.52, 0.55, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.47, 0.52, 0.55, 0.6], [-100, 0, 0, -100]),
  }}
>
  <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40">
    <span className="text-black text-xl font-semibold">Next.js</span>
  </div>
</motion.div>

  {/* Three.js - Sixth from right */}
<motion.div
  className="fixed left-1/2 top-1/4 z-30 mt-80 -translate-x-1/2"
  style={{
    opacity: useTransform(scrollYProgress, [0.50, 0.55, 0.55, 0.6], [0, 1, 1, 0]),
    x: useTransform(scrollYProgress, [0.50, 0.55, 0.55, 0.6], [100, 0, 0, 100]),
  }}
>
  <div className="bg-white w-[21rem] backdrop-blur-sm border border-black/40 rounded-3xl text-center px-6 py-4 shadow-2xl shadow-black/40">
    <span className="text-black text-xl font-semibold">Three.js</span>
  </div>
</motion.div>
</div>
        {/* Section 2 */}
        <section className="h-screen relative overflow-hidden px-12">
          <Background2 />
        </section>

        {/* Section 3 */}
        <section  className="h-screen flex items-center justify-center relative overflow-hidden px-12">
          <Background3 />
        </section>

        {/* Section 4 */}
        <section id="Skills" className="h-screen flex items-center justify-center relative overflow-hidden px-12">
          <div className="absolute inset-0 z-0">
            <Background4 />
          </div>
        </section>


{/* Sticky Cards Outside Sections 5 & 6 */}
<motion.div
  className="fixed left-1/2 md:left-12  mt-8 md:mt-0 top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 flex flex-col gap-8 z-[80] w-[20rem] md:w-[40rem]"
  style={{
    opacity: useTransform(scrollYProgress, [0.8, 0.9], [5, 0]),
  }}
>
  {/* Card 1 - Who Am I? */}
  <motion.div
    className="bg-cyan-500/10 backdrop-blur-lg border border-cyan-400/40 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
    style={{
      opacity: useTransform(scrollYProgress, [0.55, 0.6], [0, 1]),
      y: useTransform(scrollYProgress, [0.55, 0.6], [100, 0]),
    }}
  >
    <h4 className="text-cyan-300 text-lg font-extrabold uppercase tracking-wide mb-2">
      Who Am I?
    </h4>
    <h3 className="text-white text-lg font-medium leading-relaxed">
      A front-end developer who loves turning ideas into interactive digital experiences.
    </h3>
  </motion.div>

  {/* Card 2 - What I Do */}
  <motion.div
    className="bg-cyan-500/10 backdrop-blur-lg border border-cyan-400/40 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
    style={{
      opacity: useTransform(scrollYProgress, [0.65, 0.7], [0, 1]),
      y: useTransform(scrollYProgress, [0.65, 0.7], [100, 0]),
    }}
  >
    <h4 className="text-cyan-300 text-lg font-extrabold uppercase tracking-wide mb-2">
      What I Do?
    </h4>
    <h3 className="text-white text-lg font-medium leading-relaxed">
      Build modern, responsive web applications with a focus on creativity, usability, and performance.
    </h3>
  </motion.div>

  {/* Card 3 - What Motivates Me */}
  <motion.div
    className="bg-cyan-500/10 backdrop-blur-lg border border-cyan-400/40 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
    style={{
      opacity: useTransform(scrollYProgress, [0.75, 0.8], [0, 1]),
      y: useTransform(scrollYProgress, [0.75, 0.8], [100, 0]),
    }}
  >
    <h4 className="text-cyan-300 text-lg font-extrabold uppercase tracking-wide mb-2">
      What Motivates Me?
    </h4>
    <h3 className="text-white text-lg font-medium leading-relaxed">
      Exploring design, animation, and emerging tools to keep pushing the boundaries of the web.
    </h3>
  </motion.div>
</motion.div>



        {/* Section 5 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden px-12">
  <Nebula />
  

  
</section>

 {/* Section 6 */}
 <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden px-12">
        <Nebula />
        </section>

        <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden px-12">
        <Nebula />
        </section>
       {/* Section 7 */}
<section
 className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 bg-black"
  id="Projects"
>
  <Background6 />
  <Nebula />

  {/* Projects Heading - Updated to appear in Section 5 */}
  {/* Projects Heading - Updated to appear in Section 5 */}
<motion.h2
  className="absolute text-3xl md:text-4xl font-extrabold text-white md:left-17 top-4 md:top-23 z-30 text-center md:text-left w-full md:w-auto"
  style={{
    opacity: useTransform(scrollYProgress, [0.45, 0.5], [0, 1]),
  }}
>
  My Projects
</motion.h2>

  {/* Project cards - Updated to appear in Section 5 */}
  <motion.div
    className="absolute md:px-1 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-16 top-18 md:top-40 flex flex-col md:flex-row space-y-4 md:space-y-0  md:space-x-8 z-[150]"
    style={{
      opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
      scale: useTransform(scrollYProgress, [0.4, 0.5], [0.05, 1]),
      y: useTransform(scrollYProgress, [0.4, 0.5], [80, 0]),
    }}
  >
    {/* Card 1 */}  
    <motion.div
      className="w-78 md:w-96 rounded-2xl px-2 py-4 bg-cyan-950/80 md:backdrop-blur-lg border border-white/20 md:shadow-2xl md:shadow-teal-500/30"
    >
      <div className="w-72 md:w-84 h-42 md:h-58 mx-auto overflow-hidden rounded-xl mb-4">
        <a href="https://alishbye.github.io/real-medical/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src="proj.png"
            alt="Project 1"
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </a>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold text-center mt-4">REAL MEDICAL</h3>
      <p className="text-gray-200 text-sm md:text-base text-center mt-1">
        Built with ReactJS and Tailwind CSS
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="w-78 md:w-96 rounded-2xl px-2 py-4 bg-cyan-950/80 md:backdrop-blur-lg border border-white/20 md:shadow-2xl md:shadow-teal-500/30"
    >
      <div className="w-72 md:w-84 h-42 md:h-58 mx-auto overflow-hidden rounded-xl mb-4">
        <a href="https://alishbye.github.io/coffeeshop/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src="proj2.png"
            alt="Project 2"
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </a>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold text-center mt-4">COFFEE SHOP</h3>
      <p className="text-gray-200 text-sm md:text-base text-center px-1 mt-1">
        Built with ReactJS, Tailwind CSS, and Framer Motion. Features parallax scrolling and interactive animations.
      </p>
    </motion.div>
  </motion.div>

  {/* View More Button - Updated to appear in Section 5 */}
  <motion.button
    onClick={() => window.open("https://github.com/alishbye", "_blank")}
    className="absolute bottom-8 md:bottom-22 left-12 md:left-16 px-4 md:px-8 w-[calc(100vw-6rem)] md:w-[49.5rem] py-1 md:py-2 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-white font-semibold text-base md:text-lg rounded-full 
              shadow-lg hover:bg-white/20 
              flex items-center justify-center space-x-2 
              z-[150] cursor-pointer"
    style={{
      opacity: useTransform(scrollYProgress, [0.45, 0.5], [0, 1]),
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>View more projects on</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="white"
      className="ml-1 md:ml-2"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </motion.button>
</section>
      </div>

     <Footer />
    </>
  );
};

export default Section1;
