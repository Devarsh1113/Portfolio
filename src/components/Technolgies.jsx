import React from 'react'
import { FaReact, FaAngular, FaCss3Alt, FaHtml5, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiOracle, SiJunit5, SiLinux, SiWindows, SiVisualstudiocode, SiIntellijidea, SiJira, SiJavascript } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { MdDns } from 'react-icons/md';
import { motion } from 'framer-motion';

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
        {/* All Icons with Hover Effect for Tech Names */}
        
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaReact className="text-7xl text-cyan-400" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            React
          </div>
        </motion.div> 

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaAngular className="text-7xl text-red-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Angular
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaCss3Alt className="text-7xl text-blue-400" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            CSS3
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            HTML5
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiJavascript className="text-7xl text-yellow-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            JavaScript
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiTailwindcss className="text-7xl text-teal-400" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Tailwind CSS
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiSpringboot className="text-7xl text-green-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Spring Boot
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaDatabase className="text-7xl text-yellow-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Database
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiOracle className="text-7xl text-red-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Oracle
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiJunit5 className="text-7xl text-green-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            JUnit
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiLinux className="text-7xl text-orange-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Linux
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiWindows className="text-7xl text-blue-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Windows
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <FaGitAlt className="text-7xl text-orange-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Git
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiVisualstudiocode className="text-7xl text-blue-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            VS Code
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiIntellijidea className="text-7xl text-purple-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            IntelliJ
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5, 0.5)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <SiJira className="text-7xl text-blue-600" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            Jira
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(5.5, 1)}
          initial="initial"
          animate="animate"
          className="relative rounded-2xl border-4 border-neutral-800 p-4 group"
        >
          <MdDns className="text-7xl text-purple-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-t-xl">
            DNS
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technolgies;
