import { HERO_CONTENT } from "../constants"
import coding from "../assets/coding.jpg"
const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl text-white" >Devarsh Agrawal</h1>
                <span className="bg-gradient-to-r from-pink-600 via bg-gray-500-600 to bg-purple-600 bg-clip-text text-4xl tracking-tight text-transparent ">Software Developer</span>
                <p className="text-white pt-5">{HERO_CONTENT}</p>
              
            </div>
            </div>
            <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center">
            <img  className="w-full "src={coding} alt="coding picture" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home