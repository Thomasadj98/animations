import {Ref} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface HeaderProps {
  [key: string]: unknown;
}

export function Header(props: HeaderProps, ref: Ref<HTMLDivElement>) {
  return (
    <header className={styles.header}>
      <h1>Thomasadj98</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/hero">Hero</Link>
      </nav>
      <div className={styles.burger}>
        <div ref={ref} className={styles.bounds}></div>
      </div>
    </header>
  );
}