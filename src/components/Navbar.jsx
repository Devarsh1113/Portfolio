import logo2 from "../assets/logo2.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="m-8 w-20"src={logo2} alt="logo" />
      </div>
      <div className="m-8 justify-center flex items-center gap-5 text-3xl text-white">
       <FaLinkedin />
       <FaGithub />
       <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar