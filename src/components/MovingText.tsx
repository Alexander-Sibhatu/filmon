import React from 'react'
import {useTypewriter, Cursor, TypewriterHelper } from 'react-simple-typewriter';
import '../App.css'



const MovingText = () => {
    const config = {
        words: ['Manager Partner & COO', 'Trade office consultant', 'Senior planning officer'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 50,
        delaySpeed: 1700,
      };
    
      const [text]: [string, TypewriterHelper] = useTypewriter(config);
  return (
    <p className='typed'>
        <span className='typed__text'>
            {text}
        </span>
        <span className='custom__cursor'>
            <Cursor />
        </span>
        
    </p>
  )
}

export default MovingText