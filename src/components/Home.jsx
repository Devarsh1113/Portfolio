import { HERO_CONTENT } from "../constants"
import coding from "../assets/coding.jpg"
import { motion } from "framer-motion"

const container = (delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{duration:0.5, delay:delay}}
})
const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
            className="text-6xl pb-16 font-light tracking-tight lg:mt-16 lg:text-8xl text-white">
              Devarsh Agrawal
            </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"className="bg-gradient-to-r from-pink-600 via bg-gray-500-600 to bg-purple-600 bg-clip-text text-4xl tracking-tight text-transparent ">Software Developer</motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"className="text-white pt-5">{HERO_CONTENT}</motion.p>
              
            </div>
            </div>
            <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center">
            <motion.img  
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1, delay:1.2}}
            className="w-auto  lg:w-auto lg:p-8"src={coding} alt="coding picture" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home