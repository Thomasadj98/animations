'use client';
import {useRef, useState} from 'react';
import styles from './style.module.scss';
import TextDisperseComponent from './TextDisperseComponent/TextDisperseComponent';
import {motion} from 'framer-motion';

export default function PersonalIntroSection() {
  const background = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className={styles.introLine}>
          <p>Thomas</p><p>de Jong</p>
        </div>

        <div className={styles.introLine}>
          <p>Creative</p><p>Dev</p>
        </div>

        <TextDisperseComponent setIsActive={setIsActive}>
          <p>→Email</p>
        </TextDisperseComponent>

        <TextDisperseComponent setIsActive={setIsActive}>
          <p>→GitHub</p>
        </TextDisperseComponent>

      </div>

      <motion.div
        ref={background}
        animate={{opacity: isActive ? 0.8 : 0}}
        transition={{duration: 0.3}}
        className={styles.background}
      ></motion.div>
    </main>
  )
}