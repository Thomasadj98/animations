import {motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";
import PersonalIntroSection from "./components/shared/PersonalIntroSection/PersonalIntroSection";
import BlogPromoSection from "./components/shared/Blog/BlogPromoSection/BlogPromoSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // Svg Scroll animation
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 2]);
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <main>
        <div className={'homeBanner'}></div>
        <div className={'homeContent'}>
          <motion.div style={{ scale, y }} className={'svgAnimationContainer'}>
            <Image
              className={'treeSvg'}
              src="/images/tree.svg"
              alt="Tree Icon"
              layout="fill" />
          </motion.div>

          <p>Amsterdam, NL</p>
        </div>

        <BlogPromoSection />

        <PersonalIntroSection />
      </main>
    </div>
  );
}
