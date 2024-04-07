import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const delay = (val: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: val } },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={delay(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-8 text-4xl sm:text-6xl font-thin tracking-tight lg:mt-16"
            >
              Bhoomaahamso Dharamalayenam
            </motion.h1>
            <motion.span
              variants={delay(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={delay(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hi, I'm Bhoomaahamso Dharamalayenam, a web developer with a knack for crafting
              captivating frontend experiences. I've honed my skills during my tenure at Adani Digital
              Labs, where I learned from the best. Beyond the office, I'm all
              about pushing boundaries, whether it's through open-source
              contributions or personal projects. Always striving for
              self-improvement, I'm on a perpetual journey of growth and
              innovation.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex justify-center"
          >
            <Image src="/pic.jfif" alt="" width={300} height={300} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
