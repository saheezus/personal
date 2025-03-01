import './App.css';
import Typed from 'typed.js';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  return (
    <div className="fixed flex justify-center items-center p-5 bg-black text-white">
      <span className="text-xl hover:text-gray-400 transition-colors duration-300 mx-3">Me</span>
      <span className="text-xl hover:text-gray-400 transition-colors duration-300 mx-3">Projects</span>
      <span className="text-xl hover:text-gray-400 transition-colors duration-300 mx-3">Experience</span>
    </div>
  )
}

const App = () => {

  const typedDescriptions = useRef(null);
  const [yPosition, setYPosition] = useState(0);
  
  // For the description typing effect
  useEffect(() => {
    const typed = new Typed(typedDescriptions.current, {
      strings: ["a computer science student", "a Washington native", "a software developer", "an avid skier", "interested in AI/ML",],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScroll = () => {
    setYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(yPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [yPosition]);

  return (
    <div className="bg-black">

      <div className="fixed bg-black text-white h-screen p-7 justify-center items-left flex flex-col invisible md:visible">
        <div className="p-1">
          <span className="text-l font-bold hover:text-gray-400 transition-colors duration-300 mx-3">Me</span>
        </div>
        <div className="p-1">
          <span className="text-l font-bold hover:text-gray-400 transition-colors duration-300 mx-3">Projects</span>
        </div>
        <div className="p-1">
          <span className="text-l font-bold hover:text-gray-400 transition-colors duration-300 mx-3">Experience</span>
        </div>
        <div className="p-4">
          <img 
            src={require("./img/github-logo.png")}
            className="h-7 w-7 hover:opacity-50 transition-opacity duration-300"
          />
        </div>
        <div className="p-4">
          <img 
            src={require("./img/linkedin-logo.png")}
            className="h-7 w-8 hover:opacity-50 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-black text-white justify-center items-center flex flex-col h-screen">
        <div className="mx-auto justify-center p-4">
          <img 
            src={require("./img/me.jpeg")} 
            className="rounded-lg h-48 w-48 object-cover" 
          />
        </div>
        <div className="text-4xl items-center">
          <h1>I'm Sahi,</h1>
        </div>
        <div className="text-xl items-center">
          <span className="" ref={typedDescriptions}></span>
        </div>
      </div>
      <div className="bg-black text-white h-screen">

      </div>
    </div>
  );
}

export default App;
