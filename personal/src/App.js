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

  // Change the background color based on the scroll position
  const bgColor = `rgb(${(Math.min(yPosition, 2 * window.innerHeight) / window.innerHeight) * 255}, 
                        ${(Math.min(yPosition, 2 * window.innerHeight) / window.innerHeight) * 255}, 
                        ${(Math.min(yPosition, 2 * window.innerHeight) / window.innerHeight) * 255})`;

  const handleScroll = () => {
    setYPosition(window.scrollY);
  }

  // Keep track of the scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(yPosition);
    console.log(bgColor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [yPosition]);

  return (
    <div style={{backgroundColor: bgColor}}>
      <div 
        className="fixed text-white h-screen p-7 justify-center items-left flex flex-col invisible md:visible" 
        style = {{backgroundColor: bgColor, color: yPosition <= window.innerHeight ? 'white' : 'black'}}
      >
        <div className="p-1">
          <span className="text-l font-bold hover:opacity-50 transition-opacity duration-300 mx-3">Me</span>
        </div>
        <div className="p-1">
          <span className="text-l font-bold hover:opacity-50 transition-opacity duration-300 mx-3">Projects</span>
        </div>
        <div className="p-1">
          <span className="text-l font-bold hover:opacity-50 transition-opacity duration-300 mx-3">Experience</span>
        </div>
        <div className="p-4">
          <img 
            src={yPosition <= window.innerHeight ? require("./img/github-logo.png") : require("./img/github-logo2.png")}
            className="h-7 w-7 hover:opacity-50 transition-opacity duration-300"
          />
        </div>
        <div className="p-4">
          <img 
            src={yPosition <= window.innerHeight ? require("./img/linkedin-logo.png") : require("./img/linkedin-logo2.png")}
            className="h-7 w-8 hover:opacity-50 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="justify-center items-center flex flex-col h-screen text-white" style={{backgroundColor: bgColor}}>
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
      <div className="text-white h-screen" style={{backgroundColor: bgColor}}>
      </div>
      <div className="bg-white text-black h-screen grid grid-cols-8">
        <div className="bg-white h-screen text-center col-span-1">
        </div>
        <div className="bg-white h-full col-span-7">
          <h1 className="font-bold text-4xl p-3">Projects</h1>
          <div className="bg-white h-screen w-full shadow-lg p-3">
            <span>Project 1</span>
          </div>
          <div className="bg-white h-screen w-full shadow-lg p-3">
            <span>Project 2</span>
          </div>
          <h1 className="font-bold text-4xl p-3">Experience</h1>
          <div className="bg-white h-screen w-full shadow-lg p-3">
            <span>Experience 1</span>
          </div>
          <div className="bg-white h-screen w-full shadow-lg p-3">
            <span>Experience 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
