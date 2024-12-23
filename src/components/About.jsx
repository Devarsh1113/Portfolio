import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900">
      <h2 className="my-20 text-center text-4xl text-white">About Me</h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <img
            className="rounded-2xl object-cover max-h-[500px] w-full"
            src={aboutImg}
            alt="About"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <p className="text-white text-lg leading-relaxed max-w-xl">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
