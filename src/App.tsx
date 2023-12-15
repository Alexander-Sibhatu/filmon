//  @ts-check
import React from 'react';
import './App.css';
import './styles/page1.css';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
