'use client'
import {Dispatch, SetStateAction, useState} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import MenuBtn from '../MenuBtn/MenuBtn'
import {AnimatePresence, motion} from 'framer-motion';
import {Links} from '../../../../public/data/navlinksData';
import {useRouter} from 'next/router';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1>Thomasadj98</h1>
      </Link>
      <NavMenu/>
    </header>
  );
}



const menuAnimation = {
  open: {
    width: 480,
    height: 650,
    top: '-25px',
    right: '-25px',
    transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
  },
  closed: {
    width: 100,
    height: 40,
    top: '0px',
    right: '0px',
    transition: {duration: 0.4, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
  },
}

function NavMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navMenuContainer}>
      <motion.div
        className={styles.navMenu}
        variants={menuAnimation}
        animate={isActive ? 'open' : 'closed'}
        initial='closed'
      >
        <AnimatePresence>
          {isActive && <NavLinks setIsActive={setIsActive}/>}
        </AnimatePresence>

      </motion.div>
      <MenuBtn isActive={isActive} setIsActive={setIsActive}/>
    </nav>
  )
}



const linksAnimation = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: {duration: 0.35},
      delay: 0.4 + (index * 0.1),
      ease: [.215, .61, .355, 1]
    }
  }),
  exit: {
    opacity: 0,
    durarion: {duration: 0.5, ease: [0.76, 0, 0.24, 1]},
  }
}

function NavLinks({setIsActive}: { setIsActive: Dispatch<SetStateAction<boolean>> }) {
  const router = useRouter();

  return (
    <div className={styles.navLinksContainer}>
      <div className={styles.body}>
        {Links.map((link, index) => {
          return (
            <div key={index} className={styles.childLinkContainer}>
              <motion.div
                custom={index}
                variants={linksAnimation}
                animate='enter'
                exit='exit'
                initial='initial'>
                <Link href={link.href} onClick={() => setIsActive(false)}
                      className={router.pathname === link.href ? styles.active : ''}>{link.title}</Link>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}