import {motion, MotionValue, useScroll, useTransform} from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

type BlogDescription = {
  color: string;
  heading: string;
  type: string[];
}

const images: (string | BlogDescription)[] = [
  '/images/blog/1.jpg',
  '/images/blog/2.jpg',
  {
    color: '#FFD700',
    heading: 'Animations',
    type: ['Framer motion'],
  },
  '/images/blog/3.jpg',
  '/images/blog/4.jpg',
  {
    color: '#FFD700',
    heading: 'Performance',
    type: ['Nextjs', 'Angular'],
  },
  '/images/blog/5.jpg',
  '/images/blog/6.jpg',
  {
    color: '#FFD700',
    heading: 'Creative Dev',
    type: ['Shopify'],
  },
]

export default function BlogPromoSection() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width: 0, height: 0});

  const {scrollYProgress} = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const {height} = dimension;
  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, height * 1.75])
  // const y4: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    // requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column y={y} images={[images[0], images[2], images[1]]}/>
          <Column y={y2} images={[images[5], images[3], images[4]]}/>
          <Column y={y3} images={[images[6], images[7], images[8]]}/>
        </div>
      </div>
    </section>
  )
}

function Column({images, y}: { images: (string | BlogDescription)[], y: MotionValue<number> }) {
  return (
    <motion.div style={{y}} className={styles.column}>
      {
        images && images.map((src: string | BlogDescription, i: number) => {
          if (typeof src === 'string') {
            return <div key={i} className={styles.imageContainer}>
              <Image
                src={`${src}`}
                alt='image'
                fill
              />
            </div>
          } else {
            return <div key={i} className={styles.blogDescription}>
              <div className={styles.blogDescriptionInfo}>
                <h1>{src.heading}</h1>
                <div className={styles.blogTypePillContainer}>
                  {src.type.map((type: string) => {
                    return <span className={styles.blogTypePill} key={type}>{type}</span>
                  })}
                </div>
              </div>
            </div>
          }
        })
      }

    </motion.div>
  )
}