//  @ts-check
import React from 'react';
import './App.css';
import './styles/page1.css';
import About from './components/About';
import Contact from './components/Contact';
import Index from './routes';


function App() {

  return (
    <div className="App">
      <About />
      <Index />
      <Contact />
    </div>
  );
}

export default App;
