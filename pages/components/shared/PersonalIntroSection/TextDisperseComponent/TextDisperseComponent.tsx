'use client';
import {motion} from "framer-motion";
import {Dispatch, ReactElement, SetStateAction, useState} from "react";
import {disperse} from "../../../../../public/data/textDisperseEffectData";
import styles from '../style.module.scss';

type TextDisperseComponentProps = {
  children: {
    props: {
      children: string;
    }
  };
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function TextDisperseComponent({children, setIsActive}: TextDisperseComponentProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: { props: { children: string } }): ReactElement[] => {
    const chars: ReactElement[] = [];
    const word: string = element?.props?.children;
    word?.split("").forEach((char: string, i: number) => {
      chars.push(<motion.span custom={i} variants={disperse} animate={isAnimated ? "open" : "closed"}
                              key={char + i}>{char}</motion.span>)
    })
    return chars;
  }

  const manageMouseEnter = () => {
    setIsActive(true);
    setIsAnimated(true);
  }

  const manageMouseLeave = () => {
    setIsActive(false);
    setIsAnimated(false);
  }

  return (
    <div
      style={{cursor: "pointer"}}
      onMouseEnter={() => manageMouseEnter()}
      onMouseLeave={() => manageMouseLeave()}
      className={styles.introLine}
    >
      {getChars(children)}
    </div>
  )
}