import {JSX} from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import {motion, MotionValue, useMotionValue} from 'framer-motion';

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

// Define the props type
interface GalleryProps {
  mousePosition: MousePosition;
  handle: string;
}

export function Gallery({mousePosition, handle}: GalleryProps): JSX.Element {
  const defaultX = useMotionValue(0);
  const defaultY = useMotionValue(0);
  const {x = defaultX, y = defaultY} = mousePosition || {};

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${handle}/background.jpg`}
          alt="background image"
          fill
        />
      </div>
      <motion.div
        className={styles.vignette}
        style={{x, y}}>
        <Image
          src={`/images/${handle}/1.jpg`}
          alt="image"
          fill
        />
      </motion.div>
    </div>
  );
}
