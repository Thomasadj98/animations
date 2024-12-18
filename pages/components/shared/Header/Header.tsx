import {forwardRef, Ref} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface HeaderProps {
  [key: string]: unknown;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(props, ref: Ref<HTMLDivElement>) {
  return (
    <header className={styles.header}>
      <h1>Thomasadj98</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/hero">Hero</Link>
        <Link href="/parallax">Parallax</Link>
      </nav>
      <div className={styles.burger}>
        <div ref={ref} className={styles.bounds}></div>
      </div>
    </header>
  );
});

export default Header;