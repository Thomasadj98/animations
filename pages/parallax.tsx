import {JSX, useEffect} from "react";
import Intro from "./components/parallax/Intro/Intro";
import Lenis from '@studio-freight/lenis';

export default function Parallax(): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Intro />
      <div className={'parallax__description-container'}>
        <p>The early bird catches the worm</p>
      </div>
      <div className={'parallax__empty-container'}></div>
    </>
  );
}