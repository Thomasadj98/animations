import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Background from '../../../../public/images/leidinger_matthias/background.jpg';
import {JSX, useRef} from "react";
import styles from './style.module.scss';

export default function Intro(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '60vh']);

  return (
    <div ref={container} className={styles.parallaxContainer}>
      <motion.div className={styles.parallaxImageContainer} style={{y}}>
        <Image
          src={Background}
          fill
          alt="image"
          style={{objectFit: 'cover'}}
        />
      </motion.div>
    </div>
  )
}