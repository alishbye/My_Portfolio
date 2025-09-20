import React, { useEffect } from 'react';  // ✅ added useEffect here
import { useState, Suspense } from 'react';
import Background from './components/Background';
import Section1 from './components/Section1';
import Navbar from './components/Navbar';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Robot from './components/Robot';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // prevents browser restoring old position
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
      <Navbar />
      <Section1 />
  
    </>
  );
};

export default App;
