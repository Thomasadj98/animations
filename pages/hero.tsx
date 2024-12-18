'use client';
import Gallery from './components/hero/Gallery/Gallery';
import {JSX, useEffect} from 'react';
import Lenis from '@studio-freight/lenis';
import {useSpring} from 'framer-motion';
import Description from './components/hero/Description/Description';

// Define a type for the project objects
interface Project {
  name: string;
  handle: string;
}

const projects: Project[] = [
  {name: "Dyal Thak", handle: "dyal_thak"},
  {name: "Leidinger Matthias", handle: "leidinger_matthias"},
  {name: "Mark Rammers", handle: "mark_rammers"},
];

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1
};

export default function Hero(): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional cleanup if necessary
    return () => {
      lenis.destroy();
    };
  }, []);

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  // Type the event parameter for mouseMove
  const mouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const {clientX, clientY} = e;
    const targetX = clientX - window.innerWidth * 0.25 / 2;
    const targetY = clientY - window.innerWidth * 0.30 / 2;

    // Update spring values
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove}>
      {projects.map(({handle}: Project) => (
        <Gallery mousePosition={mousePosition} handle={handle} key={handle}/>
      ))}
      <Description mousePosition={mousePosition} projects={projects}/>
    </main>
  );
}
