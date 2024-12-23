import React from 'react'
import { FaReact, FaAngular, FaCss3Alt, FaHtml5, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiOracle, SiJunit5, SiLinux, SiWindows, SiVisualstudiocode, SiIntellijidea, SiJira, SiJavascript } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { MdDns } from 'react-icons/md';
import { animate, motion } from 'framer-motion';

const iconVariants = (duration, delay = 0) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
});

const Technolgies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl text-white">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* All Icons */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAngular className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiOracle className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJunit5 className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLinux className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiWindows className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVisualstudiocode className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiIntellijidea className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJira className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <MdDns className="text-7xl text-purple-500" />
        </motion.div>
        
      </motion.div>
    </div>
  );
};


export default Technolgies