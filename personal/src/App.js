import './App.css';
import Typed from 'typed.js';
import { use, useEffect, useRef } from 'react';

function App() {

  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["a computer science student", "a Washington native", "a software developer", "an avid skier"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="Name">
        <h1>I'm Sahi,</h1>
      </div>
      <div className="Description">
        <span ref={element}></span>
      </div>
    </div>
  );
}

export default App;
