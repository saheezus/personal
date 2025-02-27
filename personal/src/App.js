import './App.css';
import Typed from 'typed.js';
import { use, useEffect, useRef } from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-5 bg-black text-white">
      <span className="text-l hover:text-gray-400 transition-colors duration-300 mx-3">Me</span>
      <span className="text-l hover:text-gray-400 transition-colors duration-300 mx-3">Projects</span>
      <span className="text-l hover:text-gray-400 transition-colors duration-300 mx-3">Experience</span>
  </nav>
  )
}

const App = () => {

  const typedDescriptions = useRef(null);
  
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

  return (
    <div className="bg-black">
      <Navbar />
      {/* Main Content */}
      <div className="bg-black text-white text-center h-screen flex flex-col justify-center">
        <div className="">
        </div>
        <div class="text-4xl">
          <h1>I'm Sahi,</h1>
        </div>
        <div className="text-xl">
          <span ref={typedDescriptions}></span>
        </div>
        <div>
          {/* <button className="bg-white text-black p-2 rounded-lg mt-5 hover:bg-gray-200 transition-colors duration-300"><a href=""></a>Hello</button>
          <button className="">Okay</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
