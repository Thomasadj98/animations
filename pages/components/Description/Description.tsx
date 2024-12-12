import {JSX, useState} from 'react';
import styles from './style.module.scss';
import {motion} from 'framer-motion';
import Image from 'next/image';

interface Project {
  name: string;
  handle: string;
}

interface DescriptionProps {
  mousePosition: {
    x: any;
    y: any;
  };
  projects: Project[];
}

export default function Description({mousePosition, projects}: DescriptionProps): JSX.Element {
  const [index, setIndex] = useState<number>(0); // Initialize `index` as a number

  const {x, y} = mousePosition;

  return (
    <div className={styles.description}>
      <div className={styles.descriptionContainer}>
        {projects.map(({name}, i) => (
          <p
            onMouseOver={() => setIndex(i)} // Update the index on hover
            key={`p${i}`}>
            {name}
          </p>
        ))}
      </div>
      <motion.div
        className={styles.vignette}
        style={{x, y}}>
        <Image
          src={`/images/${projects[index].handle}/1.jpg`}
          alt={`${projects[index].name} image`}
          fill
        />
      </motion.div>
    </div>
  );
}
