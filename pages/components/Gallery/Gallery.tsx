import {JSX} from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import {motion} from 'framer-motion';

interface MousePosition {
  x: any;
  y: any;
}

// Define the props type
interface GalleryProps {
  mousePosition: MousePosition;
  handle: string;
}

export default function Gallery({mousePosition, handle}: GalleryProps): JSX.Element {
  const {x, y} = mousePosition;

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
