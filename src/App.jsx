import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Technolgies from './components/Technolgies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-green-300 selection:text-green-700">
     <div className="fixed top-0 -z-10 h-full w-full">
     <div className="absolute inset-0 h-full w-full bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] z-0"></div>
     </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        <About />
        <Technolgies />
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
