import {Dispatch, SetStateAction} from 'react';
import styles from './style.module.scss';
import {motion} from 'framer-motion';

interface MenuBtnProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function MenuBtn({isActive, setIsActive}: MenuBtnProps) {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.menubtnContainer}>

      <motion.div
        className={styles.slider}
        animate={{top: isActive ? '-100%' : '0'}}
        transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
      >
        <div className={styles.el}>
          <MenuBtnText label={'Menu'} />
        </div>
        <div className={styles.el}>
          <MenuBtnText label={'Close'} />
        </div>
      </motion.div>

    </div>
  )
}

function MenuBtnText({label}: { label: string }) {
  return (
    <div className={styles.menubtnText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}